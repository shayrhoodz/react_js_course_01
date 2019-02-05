import {createStore} from 'redux';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    case 'RST':
      return state = 0;
    default:
      return state;
  }
}

// action creater
const inc = () => ({type: 'INC'}); // тоже самое что и ниже
const dec = () => ({type: 'DEC'});
const rst = () => ({type: 'RST'});

const store = createStore(reducer); // 1 тоже самое
// console.log(store.getState());

document.getElementById('inc').addEventListener('click', () => {
  store.dispatch(inc());
});
document.getElementById('dec').addEventListener('click', () => {
  store.dispatch(dec());
});
document.getElementById('rst').addEventListener('click', () => {
  store.dispatch(rst());
});


const update = () => {
  document.getElementById('counter').textContent = store.getState();
}

store.subscribe(update);
