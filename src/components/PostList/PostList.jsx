import React from 'react';
import classes from './PostList.module.scss';
import { NavLink } from 'react-router-dom';

const PostList = ({posts}) => {
    return (
        <div className='container'>
            <div className={classes.blogListWr}>
                <h1>Latest Posts</h1>
                <div className={classes.blogList}>
                    {
                        posts.map((post,index) => {
                            return (
                              <div className={classes.itemWr} key={post.title + index}>
                                <NavLink to={'/posts/' + post.id}>
                                    <h2> {post.title}</h2>
                                    <div>{post.body}</div>
                                </NavLink>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default PostList;
