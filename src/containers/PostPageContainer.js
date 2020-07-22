import React, {PureComponent} from 'react';
import PostPage from '../components/PostPage/PostPage';
import Spinner from '../components/UI/Spinner/Spinner';
import ErrorIndicator  from "../components/UI/ErrorIndicator/ErrorIndicator";
import {connect} from 'react-redux';
import {compose} from "redux";
import {Operation} from '../redux/blog/operations';
import {ActionCreator} from '../redux/blog/actions';


class BlogPageContainer extends PureComponent {
    constructor(props) {
      super(props);
      this.props.loadPost();
    }

    componentWillUnmount(){
      this.props.OnePostReset();
    }

    render() {
        const { post, loading, error,itemId} = this.props;
        if (loading) return <Spinner/>
        if(error) return <ErrorIndicator/>
        return  (
            <PostPage post={post} itemId={itemId} key={itemId + this.props.post.title}/>
        )
    }
}

const mapStateToProps = (state) => {
  const {post,loading, error}  = state.dataBlog.postItem;
  return{ post, loading, error }
}

const mapDispatchToProps = (dispatch,ownProps) =>  {
    const {itemId} = ownProps;
    return {
      loadPost: function() {
        dispatch(Operation.loadPost(itemId))
      },
      OnePostReset: function(){
        dispatch(ActionCreator.OnePostReset())
      },
    }
}

export default compose (
    connect(mapStateToProps,mapDispatchToProps)
)(BlogPageContainer)
