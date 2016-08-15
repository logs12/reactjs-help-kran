import './home.scss';

import React, { Component } from 'react';
import { Link } from 'react-router'
import Slider from './slider.jsx';

export default class Home extends Component{

    renderContent() {
        let pathImages = this.props.pathImages;
        let slider = this.props.photo.map((item, index, arr) => {
            if (index % 2 == 0) {
                let url = `/${item.name}`;
                let urlNext = `/${arr[index + 1].name}`;
                return (
                    <div className="row" key={index} >
                        <Link to={url}>
                            <div className="col-md-6" key={index} >
                                <Slider  photo = {item.photos} album = {item.name} key={index} pathImages={pathImages}/>
                            </div>
                        </Link>
                        <Link to={urlNext}>
                            <div className="col-md-6" key={index + 1} >
                                <Slider  photo = {arr[index + 1].photos} album = {arr[index + 1].name} key={index + 1} pathImages={pathImages}/>
                            </div>
                        </Link>
                    </div>
                );
            }
        });
        return slider;
    }
    render()  {

        return (
            <div id="home" >
                {this.renderContent()}
            </div>
        )
    }
};
