import React from 'react'; 
import { connect } from 'react-redux'; 
import Blog from './Blog';


const BlogList = ({ blogs, dispatch}) => (
  <div>
    { blogs.map((b => {
      return ( 
        <div key={b.id}>
          <h3>{b.post}</h3>
          
          <p>{b.post_content}</p>
          <button
            onClick={() => {
              dispatch({ type: 'EDIT_POST' });
            }}>
            Edit Post
          </button>
          <button
            onClick={() => {
              dispatch({ type: 'DELETE_POST' });
            }}>
            Delete Post
          </button>
        </div>
      )
    })
    )}
  </div>
)

const mapStateToProps = (state) => {
  return { blogs: state.blogs, filter: state.filter }
}

export default connect(mapStateToProps)(BlogList); 

