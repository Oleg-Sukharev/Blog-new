import React from 'react';
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';
import PostComments from '../PostComments/PostComments';
import PostFormContainer from '../../containers/PostFormContainer';

const PostPage = (props) => {
  const { author, title, comments } = props.post;
  return (
    <div>
      <div className='container'>
        <Link to='/'>
          <Button className="success">Latest Posts</Button>
        </Link>
        <h1>Post page</h1>
        <div>
          <div>{title}</div>
          <div>{author}</div>
        </div>
        <PostFormContainer />
        {comments ? <PostComments comments={comments} /> : null}
      </div>
    </div>
  )
}

export default PostPage;
