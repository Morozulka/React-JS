import React from 'react';

export default class Login extends React.Component {
    render() {
        return <form action="#" method="post">
            <h2>{this.props.titleLogin}</h2>
            <label>
                Имя
                <input type="text"/>
            </label>
            <label>
                Пароль
                <input type="password"/>
            </label>
            <button>Войти</button>
    </form>
    }
}