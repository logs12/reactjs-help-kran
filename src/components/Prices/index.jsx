import React, { Component } from 'react';
import FormValidation from '../../classes/FormValidation.js';

export default class Prices extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: '',
            text: ''
        };
    }
    
    handleNameChange(e) {
        this.setState({name: e.target.value});
    }

    handlePhoneChange(e) {
        this.setState({phone: e.target.value});
    }

    handleEmailChange(e){
        this.setState({email: e.target.value});
    }

    handleTextChange(e){
        this.setState({text: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(e);
        let data = {
            name: this.state.name.trim(),
            phone: this.state.phone.trim(),
            email: this.state.email.trim(),
            text: this.state.text.trim()
        };
        console.log('wedwedwed1111qqqqq');
        let formObj = new FormValidation('form-prices', true, 'bootstrap');
        if (formObj.resultValidation) {
            $.ajax({
                url: '/server/mail.php',
                data: data,
                async: false,
                success: function(data) {
                    alert(2222);
                    console.log(data);
                }
            });
        }
        console.log('formObj = ', formObj.resultValidation);
        console.log(`
            name = ${name}
            phone = ${phone}
            email = ${email}
            text = ${text}
        `);
        // TODO: отправить запрос на сервер
        //this.setState({author: '', text: ''});
    }
    
    render () {
        return (
            <form role="form" id="form-prices"  onSubmit={this.handleSubmit.bind(this)} noValidate >
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">ФИО</label>
                    <input
                        type="name"
                        className="form-control required"
                        data-required="empty name"
                        placeholder="Введите Ваше ФИО"
                        value={this.state.name}
                        onChange={this.handleNameChange.bind(this)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPhone">Контактный телефон</label>
                    <input
                        type="phone"
                        className="form-control"
                        data-required="empty phone"
                        placeholder="Введите Ваш контактный телефон"
                        value={this.state.phone}
                        onChange={this.handlePhoneChange.bind(this)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        data-required="empty email"
                        placeholder="Введите адрес электронной почты"
                        value={this.state.email}
                        onChange={this.handleEmailChange.bind(this)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputText">Сообщение</label>
                    <textarea
                        type="message"
                        className="form-control"
                        data-required="empty"
                        placeholder="Введите ваше сообщение"
                        value={this.state.text}
                        onChange={this.handleTextChange.bind(this)}
                    >
                    </textarea>
                </div>
                <button type="submit" className="btn btn-default text-center">Отправить заявку</button>
            </form>
        )
    }
}
