import React, { Component } from 'react'
import { Link } from 'react-router';
import Footer from 'layouts/footer';


export default class App extends Component{
    render()  {
        return (
            <div className="app">
                <header>
                    <div className="container">
                        <div className="row">
                            <div className="left col-md-8">
                                <img src="dist/img/logo.png" />
                            </div>
                            <div className="right col-md-4">
                                <p>г.Нижний Новгород</p>
                                <p>тел: +7 (831) 291-45-02</p>
                                <p>e-mail: help-crane@mail.ru</p>
                                <p>м.тел: +7-909-294-96-31</p>
                            </div>
                        </div>
                        <nav role="navigation" className="navbar navbar-default navbar-static-top">
                            <div id="navbarCollapse" className ="collapse navbar-collapse">
                                <ul className ="nav nav-justified > li">
                                    <li><Link to="/">Наши Услуги</Link></li>
                                    <li><Link to="/examples">Примеры работ</Link></li>
                                    <li><Link to="/prices">Стоимость услуг</Link></li>
                                    <li><Link to="/about">О нас</Link></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </header>
    
                <main className="wrapper">
                    <div className="container">
                        {this.props.children}
                    </div>
                </main>
                <Footer />
            </div>
        )
    }
}


