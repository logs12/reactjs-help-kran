'use strict'

var gulp = require('gulp'),
    webpack = require('webpack-stream'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    //uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cssmin = require('gulp-minify-css'),
    rimraf = require('rimraf'),
    browserSync = require("browser-sync"),//Автоматическое обновление страниц
    reload = browserSync.reload,
    path = {
        build: { //Тут мы укажем куда складывать готовые после сборки файлы
            js: 'dist/',
            css: 'dist/css/',
            img: 'dist/img/',
            fonts: 'dist/fonts/'
        },
        src: { //Пути откуда брать исходники
            js: 'src/app.js',
            style: 'src/styles/main.scss',
            img: 'src/img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
            fonts: 'src/fonts/**/*.*'
        },    
        watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
            js: [
                'src/*.js',
                'src/components/*.js',
                'src/components/photos/*.js',
                'src/layouts/*.js'
            ],
            style: 'src/styles/**/*.scss',
            img: 'src/img/**/*.*',
            fonts: 'src/fonts/**/*.*'
        },
        clean: './dist'
    };


gulp.task("webserver", function() {
   browserSync({
     server: {
       baseDir: "./dist"
     },
     host: 'localhost',
     port: 3000,
     tunnel: true
   });
});

/**
 * Js Webpack and compile
 */
gulp.task('webpack', function() {
    return gulp.src(path.src.js)
        .pipe(webpack(require('./webpack.config.js')).on('error', function(error) {
            // Перехват ошибок
           done(error);
        }))
        .pipe(gulp.dest('./'))
});

/**
 * Sass compile
 */
gulp.task('style:build', function () {
  gulp.src(path.src.style) //Выберем наш main.scss
      .pipe(sourcemaps.init()) //То же самое что и с js
      .pipe(sass()) //Скомпилируем
      .pipe(prefixer()) //Добавим вендорные префиксы
      .pipe(cssmin()) //Сожмем
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(path.build.css)) //И в build
      .pipe(reload({stream: true}));
});

/**
 * watchers
 */
gulp.task('watch', function () {
    watch(path.watch.js, function (ev, callback) {
        gulp.start('webpack');
    });
    watch([path.watch.style], function (ev, callback) {
        gulp.start('style:build');
    });
});

gulp.task('build', [
    'webpack',
    'style:build'
]);

gulp.task('clean', function () {
    rimraf(path.clean, callback)
});

gulp.task('default', ['build','watch']);