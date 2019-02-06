import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../action';
// import {bindActionCreators} from 'redux';


const Counter = ({counter, inc, dec, rst}) => {
  return (
    <>
    <div className="wrap__counter">
      <span>{counter}</span>
    </div>
    <div className="wrap__button">
      <button onClick={inc} className="btn btn-success"></button>
      <button onClick={dec} className="btn btn-warning"></button>
      <button onClick={rst} className="btn btn-danger"></button>
    </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    counter: state
  }
}
// const mapDispatcherToProps = (dispatch) => {
//   return bindActionCreators(actions, dispatch);
// }
// export default connect(mapStateToProps, mapDispatcherToProps)(Counter);
export default connect(mapStateToProps, actions)(Counter);