import React from 'react';
import { Link } from 'react-router';

import './style.scss';

export default React.createClass({
    render: function() {
        return (
            <div id="about">
                <p>
                    Наша компания занимается кранами, подкрановыми путями и техническим обслуживанием уже на протяжении 5 лет.
                    Наши заказчики поручают нам работы от самых простых, до самых сложных, вне зависимости от географического местонахождения объектов и климатических условий.
                    Мы имеем опыт работы с любыми кранами, в том числе и продажи с монтажом и дальнейшем техническим сопровождением.
                    В нашей компании работают профессиональные кадры, имеющие богатый опыт выполнения работ, необходимых нашим заказчикам.
                    Мы работаем с кранами:
                </p>
                <ul>
                    <li><i className="glyphicon glyphicon-ok"></i> Мостовые</li>
                    <li><i className="glyphicon glyphicon-ok"></i> Козловые</li>
                    <li><i className="glyphicon glyphicon-ok"></i> Опорного типа</li>
                    <li><i className="glyphicon glyphicon-ok"></i> Подвесного типа</li>
                    <li><i className="glyphicon glyphicon-ok"></i> Однобалочными</li>
                    <li><i className="glyphicon glyphicon-ok"></i> Двух балочными</li>
                    <li><i className="glyphicon glyphicon-ok"></i> Подкрановыми путями</li>
                    <li><i className="glyphicon glyphicon-ok"></i> Подвесного типа</li>
                    <li><i className="glyphicon glyphicon-ok"></i> Опорного типа</li>
                    <li><i className="glyphicon glyphicon-ok"></i> Наземного типа</li>
                </ul>
                <p>
                    Выполняем работы по нивелировке и рихтовке подкрановых путей любого типа.
                    Также мы предоставляем возможность перевода на радиоуправление по средством
                    радиочастотного канала с дублирующем управлением подвесного пульта.
                </p>
            </div>
        )
    }
});