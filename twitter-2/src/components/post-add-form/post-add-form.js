import React from 'react';

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

const PostAddFrom = ({onAdd}) => {
  return (
    <BottomPanel>
      <input
        type="text"
        placeholder="О чем вы думаете сейчас?"
        className="form-control new-post-label"
      />
      <button
        type="submit"
        className="btn btn-outline-secondary"
        onClick={() => onAdd('Hello')}>
        Добавить
      </button>
    </BottomPanel>
  )
}

export default PostAddFrom;