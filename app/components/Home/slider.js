import React, { Component } from 'react';
import { Link } from 'react-router'

/**
 *  Slider photos
 */
export default class Slider extends Component {
    render () {
        let data = this.props.photo;
        let album = this.props.album;
        let idCarousel = 'carousel-'+album;
        let attr = '#carousel-'+album;
        let slaids = data.map(function(item,index){
            let url = 'dist/img/' + album + '/' + item; 
            let activeClass = (index == 0) ? activeClass = 'active item' : 'item';
            return (
                <div className={activeClass} key={index}>
                      <img src = {url} />
                </div>
            );
        });
        return (
            <div id={idCarousel} className="carousel slide" data-interval="3000" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target={attr}  data-slide-to="0" className="active"></li>
                    <li data-target={attr}  data-slide-to="1"></li>
                    <li data-target={attr}  data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    {slaids}
                </div>
                <Link className="carousel-control left" to={attr} data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                </Link>
                <Link className="carousel-control right" to={attr} data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                </Link>
            </div>
        )
    }
}
