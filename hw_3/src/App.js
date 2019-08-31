import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import Login from './Login'

class App extends React.Component {
  render() {
    const menuItems = [
      { href: "/", title: "Главная" },
      { href: "/about", title: "О нас" },
      { href: "/service", title: "Услуги" },
      { href: "/contacts", title: "Контакты" }
    ];

    return <div>
      <h1 class="title">Первое приложение на React</h1>
      <Menu items={menuItems} titleMenu="Основное меню сайта" />
      <Login titleLogin="Войти" />
    </div>
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));