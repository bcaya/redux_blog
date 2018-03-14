import React from 'react'; 
import { connect } from 'react-redux'; 

const Blog = ({ id, post, post_content, complete, dispatch }) => (
  <li 
    onClick={() => dispatch({ type: 'TOGGLE_BLOG', id })}
    style={ complete ? { textDecoration: 'line-through', color:'grey'} : 
    {} }
    >
      {post}
    </li>
)

export default connect()(Blog)