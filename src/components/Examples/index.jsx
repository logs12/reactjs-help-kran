import React, { Component } from 'react';
import { Link } from 'react-router';


export default class Examples extends Component{
    renderContent() {
        let examples = this.props.photo.map((item, index, arr) => {
            if (index % 2 == 0) {
                let url = `/${item.name}`;
                let urlNext = `/${arr[index + 1].name}`;
                let album = item.name;
                let urlimage = `public/assets/img/${album}/${arr[index + 1].photos[0]}`;
                return (
                    <div className="row" key={index} >
                        <Link to={url}>
                            <div className="col-md-6" key={index} >
                                <h3>{item.title}</h3>
                                <img height="300" width="400" src={urlimage} />
                            </div>
                        </Link>
                        <Link to={urlNext}>
                            <div className="col-md-6" key={index + 1} >
                                <h3>{arr[index + 1].title}</h3>
                                <img height="300" width="400" src={urlimage} />
                                
                            </div>
                        </Link>
                    </div>
                );
            }
        });
        return examples;
    }
    render()  {
            return (
                <div id="examples" >
                    {this.renderContent()}
                </div>
            )
    }
};
