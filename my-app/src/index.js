import React, {Component} from 'react';
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

// React.Fragment таким образом можно сделать единый эдемент без вставки в <div></div>? а можно сделать пустые кавычки <></>
// props свойство нашего компонента
// значение атрибутов больше изменять нельзя, идут только на чтение.
// function WhoAmI(props) {
//   return (
//     <> 
//       <h1>My Name is {props.name}, surname - {props.surname}</h1>
//       <a href={props.link}>My profile</a>
//     </>
//   )
// }
//диструктуризация
class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 26
    }
    this.nextYear = this.nextYear.bind(this);
    // this.nextYear = () => {
    //   this.setState(state => ({
    //     years: ++state.years
    //   }))
    // }
  }

// новый синтаксис использовать без коснструктора
  // state = {
  //   years: 26
  // }
  // nextYear = () => {
  //   this.setState(state => ({
  //     years: ++state.years
  //   }))
  // }

  nextYear () {
    //this.state.years++
    this.setState(state => ({
      years: ++state.years
    }))
  }
  render() {
    const {name, surname, link} = this.props;
    const {years} = this.state;
    return (
      <> 
        <button onClick={this.nextYear} >++</button>
        <h1>My Name is {name}, surname - {surname}, years - {years}</h1>
        <a href={link}>My profile</a>
      </>
    )
  }
}

const All = () => {
  return (
    <>
      <WhoAmI name="John" surname="Smith" link="facebook.com" />
      <WhoAmI name="Ivan" surname="Smith" link="vk.com" />
      <WhoAmI name="Radik" surname="Shepard" link="facebook.com" />
    </>
  )
}

ReactDOM.render(<All/>, document.getElementById('root'));

