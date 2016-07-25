import React, { Component } from 'react'

export default class Photos extends Component {

    /**
     * Init fabcy box and get props
     * @param props
     */
    constructor (props) {
        super(props);
        this.album = this.props.params.album;
        this.allPhoto = this.props.photo;
        $('.fancybox').fancybox();
    }

    /**
     * @param {string} photo
     * @param {string} this.title
     */
    getPhoto() {
       this.allPhoto.map((item, index, arr) => {
            if (item.name == this.album) {
                this.photo = item.photos;
                this.title = item.title;
            }
        });
    }
    
    renderPhoto() {
        return this.photo.map((item, index, arr) => {
            if (index % 2 == 0) {

                let url = `/dist/img/${this.album}/${item}`;
                let urlNext = `/dist/img/${this.album}/${arr[index + 1]}`;
                return (
                    <div className="photos row" key={index}>
                        <div className="col-md-6">
                            <a href={url} className="fancybox" rel="gallery">
                                <img height="300" width="400" src = {url} />
                            </a>
                        </div>
                        <div className="col-md-6" >
                            <a href={urlNext} className="fancybox" rel="gallery" >
                                <img height="300" width="400" src = {urlNext}/>
                            </a>
                        </div>
                    </div>
                );
            }
        });
    }

    render() {
        this.getPhoto();
        return (
            <div>
                <h3>{this.title}</h3>
                {this.renderPhoto()}
            </div>
        )
    }
}