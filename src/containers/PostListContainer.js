import React, { Component } from 'react';
import PostList from '../components/PostList/PostList';
import Spinner from '../components/UI/Spinner/Spinner';
import ErrorIndicator  from "../components/UI/ErrorIndicator/ErrorIndicator";
import {connect} from 'react-redux';
import {compose} from "recompose";

class PostListContainer extends Component {
    render() {
        const { posts, loading, error} = this.props;
        if (loading)  return <Spinner/>
        if(error) return <ErrorIndicator/>
        return(
          <PostList posts={posts}/>
        )
    }
}

const mapStateToProps = (state) => {
  const {posts,loading, error}  = state.dataBlog.postList;
  return{ posts, loading, error };
}

const mapDispatchToProps = (dispatch) =>  {
    return {}
}

export default compose (
  connect(mapStateToProps,mapDispatchToProps)
)(PostListContainer)
