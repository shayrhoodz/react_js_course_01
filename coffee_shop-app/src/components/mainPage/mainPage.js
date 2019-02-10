import React, {Component} from 'react';
import Header from '../header';
import Footer from '../footer';
// import './mainPage.css';

export default class MainPage extends Component {
  render() {

    return(

      <div className="preview">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                  <Header />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <h1 className="title-big">Everything You Love About Coffee</h1>
                    <img className="beanslogo" src="img/logo/Beans_logo.svg" alt="Beans logo"/>
                    <div className="preview__subtitle">We makes every day full of energy and taste</div>
                    <div className="preview__subtitle">Want to try our beans?</div>
                    <a href="#" className="preview__btn">More</a>
                </div>
            </div>
        </div>
      </div>

    )
  }
} 