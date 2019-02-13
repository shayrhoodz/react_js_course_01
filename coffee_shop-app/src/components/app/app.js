import React, {Component} from 'react';
import MainPage from '../mainPage';
import CoffeePage from '../coffeePage';
import PleasurePage from '../pleasurePage';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import GetService from '../../services/getService';
// import Footer from '../footer';

export default class App extends Component {

  gotService = new GetService();
  

  render() {
    const {getBestItems1} = this.gotService;
    console.log(getBestItems1);
    return (
      <Router>
        <div className="app">
          {/* <Route path='/' component={() => MainPage} /> */}
          <Route path='/' exact component={MainPage} />
          {/* <Route path='/mainpage' component={MainPage} /> */}
          <Route path='/coffeepage' component={CoffeePage} />
          <Route path='/pleasurepage' component={PleasurePage} />
        </div>
      </Router>
    );
  }
}