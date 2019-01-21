import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

// const elem = React.createElement('h2', null, "Hello World!!!") // старый формат
// const elem = <h2>Hello World!</h2> // нормальный формат

const Header = () => {
  const scr = '<script>alert("Error!")</script>';
  return <h2>Hello World!</h2>
}

const Field = () => {
  const holder = "Enter here";
  const styledField = {
    width: '300px'
  }

  return <input
    style = {styledField}
    type="text" 
    placeholder={holder}
    autoComplete = ""
    className = "first"
    htmlFor = ""
  />
}

const Btn = () => {
  const text = "Log in";
  const res = () => {
    return 'Log in, please'
  }
  const p = <p>Log in</p>
  const logged = true;
  return <button>{logged ? "Enter" : text}</button> // условие тернатный оператор (Если залогинен то (?) null если нет (:) то появится текст)
}

const App = () => {
  return (
    <div>
      <Header/>
      <Field/>
      <Btn/>
    </div>
  )
}
// обязательно надо засунуть в div


ReactDOM.render(<App/>, document.getElementById('root'));

