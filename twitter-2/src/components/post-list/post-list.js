import React from 'react';

import PostListItem from '../post-list-item';
import {ListGroup} from 'reactstrap';
import nanoid from 'nanoid';

import './post-list.css'

const PostList = ({posts, onDelete}) => {

  const elements = posts.filter(posts => typeof posts === 'object' && posts.constructor === Object).map((item) => {
    const {id, ...itemProps} = item;

    const randomId = nanoid();

    // console.log (randomId);

    return (
      <li key={randomId} className='list-group-item'>
        {/* <PostListItem 
        label={item.label} 
        important={item.important} /> */}
        <PostListItem 
          {...itemProps}
          onDelete={() => onDelete(id)} />
      </li>
    )
  })

  return (
    <ListGroup className="app-list">
      {elements}
    </ListGroup>
  )
}

export default PostList;