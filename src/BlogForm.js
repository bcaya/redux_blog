import React from 'react'; 
import { connect } from 'react-redux';

class BlogForm extends React.Component {
  defaultValues = { post: '', post_content: ''}
state = { ...this.defaultValues };
  

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch, id } = this.props 
    const { post, post_content } = this.state 
    dispatch({ 
      type: 'ADD_BLOG',
      blog: { post, post_content},
    })
    dispatch({ type: 'INC_ID'})
      this.setState(...this.defaultValues)
  }

  handleChange = (e) => {
     let { target: { id, value } } = e;
    this.setState({ [id]: value });
  };
    edit() {
    return <BlogForm {...this.state.post} submit={this.submit} />
  }


  render() {
    const { post, post_content } = this.state 
    return (
    <div>
      <h3>Add a Post</h3>
      <form onSubmit={this.handleSubmit}>
        <input value={post} id ="post" onChange={this.handleChange} required />
         <input value={post_content} id ="post_content" onChange={this.handleChange} required />
     
      <button>Post it :D </button>
      </form>

    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId}
}
export default connect(mapStateToProps)(BlogForm); 
