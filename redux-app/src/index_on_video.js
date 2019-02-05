import {createStore} from 'redux';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    case 'RND':
      return state + action.value;
    default:
      return state;
  }
}

// action creater
const inc = () => ({type: 'INC'}); // тоже самое что и ниже
const dec = () => ({type: 'DEC'});
const rnd = (value) => ({type: 'RND', value});
// const inc = () => {
//   return {
//     type: 'INC'
//   }
// }

const store = createStore(reducer); // 1 тоже самое
// console.log(store.getState());

document.getElementById('inc').addEventListener('click', () => {
  store.dispatch(inc());
});
document.getElementById('dec').addEventListener('click', () => {
  store.dispatch(dec());
});
document.getElementById('rnd').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10);
  store.dispatch(rnd(value));
});


const update = () => {
  document.getElementById('counter').textContent = store.getState();
}

store.subscribe(update);


// store.subscribe(() => { //функция подписки на наш store, всегда вызывается при изменении state
//   console.log(store.getState());  
// })

// store.dispatch({type: 'INC'}); // связующие звено между action и store
// // console.log(store.getState());
// store.dispatch({type: 'INC'});
// // console.log(store.getState());
// store.dispatch({type: 'INC'});
