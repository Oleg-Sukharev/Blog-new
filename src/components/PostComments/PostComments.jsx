import React from 'react';
import classes from './PostComments.module.scss';

const PostComments = (comments) => {
    return (
        <div className={classes.commentsWr}>
            <h2>Comments</h2>
            <div className={classes.comments}>
                {
                    Object.keys(comments.comments).map((item) => {
                        const comment = comments.comments[item];
                        return (
                            <div key={comment.id}>
                                {comment.body}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PostComments;
