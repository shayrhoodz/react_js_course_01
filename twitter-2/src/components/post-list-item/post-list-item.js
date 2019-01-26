import React, {Component} from 'react';

import './post-list-item.sass'

export default class PostListItem extends Component {
  //это все теперь не нужно, мы работаем с внешним обработчиков событий и функцией
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     important: false,
  //     like: false
  //   };
  //   this.onImportant = this.onImportant.bind(this);
  //   this.onLike = this.onLike.bind(this);
  // }
  // onImportant() {
  //   this.setState(({important}) => ({
  //     important: !important
  //   }))
  // }  
  // onLike() {
  //   this.setState(({like}) => ({
  //     like: !like
  //   }))
  // }

  render() {
    const {label, onDelete, onToggleImportant, onToggleLiked, important, like} = this.props;
    // const {important, like} = this.state; // теперь у нас нету state, поэтому нет необходимости получать от сюда данные
    let classNames = 'app-list-item d-flex justify-content-between';
    
    if (important) {
      classNames +=' important'; //добавить класс
    } 
    if (like) {
      classNames +=' like';
    }

    return (
      <div className={classNames}>
        <span 
        className="app-list-item-label"
        onClick={onToggleLiked}
        // onMouseDown={onToogleImportant}
        >
          {label}
        </span>
        <div className="d-flex justify-content-center align-items-center">
          <button 
          type="button" 
          className="btn-star btn-sm"
          onClick={onToggleImportant}>
            <i className="fa fa-star"></i>
          </button>
          <button 
          type="button" 
          className="btn-trash btn-sm"
          onClick={onDelete}>
            <i className="fa fa-trash-o"></i>
          </button>
          <i className="fa fa-heart"></i>
        </div>
      </div>
    )
  }
}