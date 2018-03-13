import React from 'react'; 
import { connect } from 'react-redux'; 
import Blog from './Blog';


const BlogList = ({ blogs }) => (
  <ul>
    { blogs.map((b, i) => {
      return ( 
        <li key={i}>
          {b}
        </li>
      )
    })
    }
  </ul>
)

const mapStateToProps = (state) => {
  return { blogs: state.blogs, filter: state.filter }
}

export default connect(mapStateToProps)(BlogList); 

