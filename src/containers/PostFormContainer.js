import React, { Component } from 'react';
import PostForm from '../components/PostForm/PostForm';
import {connect} from 'react-redux';
import {compose} from "recompose";
import {Operation} from '../redux/blog/operations';

class PostFormContainer extends Component {
    render() {
        return(
          <PostForm id={this.props.id} createCommentHandeler={this.props.createComment} />
        )
    }
}

const mapStateToProps = (state) => {
  const {id}  = state.dataBlog.postItem.post;
  return{id};
}

const mapDispatchToProps = (dispatch) =>  {
    return {
      createComment: function(value,id) {
        dispatch(Operation.createComment(value,id))
      },
    }
}

export default compose (connect(mapStateToProps,mapDispatchToProps))(PostFormContainer)
