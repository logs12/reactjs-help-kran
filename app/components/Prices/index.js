import React from 'react';

export default React.createClass({
    render: function() {
        return (
            <form role="form" id="form-prices">
                <div className="form-group">
                    <label for="exampleInputEmail1">ФИО</label>
                    <input type="name" className="form-control" id="name" placeholder="Введите Ваше ФИО" />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Контактный телефон</label>
                    <input type="phone" className="form-control" id="phone" placeholder="Введите Ваш контактный телефон" />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Введите адрес электронной почты" />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Сообщение</label>
                    <textarea type="message" className="form-control" id="message" placeholder="Введите ваше сообщение"></textarea>
                </div>
                <button type="submit" className="btn btn-default text-center">Отправить заявку</button>
            </form>
        )
    }
});
