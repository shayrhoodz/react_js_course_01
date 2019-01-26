import React, {Component} from 'react';

import './post-add-form.css';
import styled from 'styled-components';

const BottomPanel = styled.div`
  display: flex;
  margin-top: 20px;
  .new-post-label {
    width: auto;
    flex-grow: 1;
    margin-right: 3px;
  }
`

export default class PostAddFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onValueChange(e){    
    this.setState({
      text: e.target.value
    })
  }

  onSubmit(e){
    e.preventDefault();
    console.log(`Проверка поста ${this.state.text}`);
    if (this.state.text !== '') {
      this.props.onAdd(this.state.text)
    }
    this.setState({
      text: ''
    })    
  }

  // onSubmit(e){
  //   e.preventDefault();
  //   console.log(this.state.text);
  //   if {this.state.text === ''}
  //   this.props.onAdd(this.state.text)
  //   this.setState({
  //     text: ''
  //   })
  // }

  render() {
    return (
      <form className="bottom-panel d-flex"
      onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="О чем вы думаете сейчас?"
          className="form-control new-post-label"
          onChange={this.onValueChange}
          value={this.state.text} //теперь компонент контроллируемый, есть обратная связь
        />
        <button
          type="submit"
          className="btn btn-outline-secondary">
          Добавить
        </button>
      </form>
    )
  }  
}