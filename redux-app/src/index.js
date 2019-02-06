import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
// import * as actions from './action';
import App from './components/app';


const store = createStore(reducer);
// const {dispatch} = store;


// const {inc, dec, rst} = bindActionCreators(actions, dispatch);

// document.getElementById('inc').addEventListener('click', inc);
// document.getElementById('dec').addEventListener('click', dec);
// document.getElementById('rst').addEventListener('click', rst);


// const update = () => {
  // document.getElementById('counter').textContent = store.getState();

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));


// }
// update();

// // rst={() => {
// //   const value = Math.floor(Math.random() * 10);
// //   rst(value);
// // }}          
// store.subscribe(update);





  // document.getElementById('rst').addEventListener('click', () => {
    //   const value = Math.floor(Math.random() * 10);
    //   rst(value);
  // });

// const bindActionCreater = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// }

// const {incDispatch, decDispatch, rstDispatch} = bindActionCreators(
//   {
//     incDispatch: inc,
//     decDispatch: dec,
//     rstDispatch: rst
//   }
//   , dispatch);
// const decDispatch = bindActionCreators(dec, dispatch);
// const rstDispatch = bindActionCreators(rst, dispatch);




// const incDispatch = () => dispatch(inc());
// const decDispatch = () => dispatch(dec());
// const rstDispatch = () => dispatch(rst());
// const rstDispatch = (value) => dispatch(rst(value));