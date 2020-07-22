import {ActionCreator}from './actions';

export const Operation = {
  loadPosts: () => (dispatch, _getState, api) => {
    return api.get(`/posts/`)
      .then((response) => {
        dispatch(ActionCreator.loadPosts(response.data));
      }).catch((error) => {
        dispatch(ActionCreator.loadPostsError(error));
    })
  },

  loadPost: (id) => (dispatch, _getState, api) => {
    return api.get(`/posts/${id}?_embed=comments`)
      .then((response) => {
        dispatch(ActionCreator.loadOnePost(response.data));
      }).catch((error) => {
        dispatch(ActionCreator.loadOnePostError(error));
    })
  },

  createComment: (value,id) => (dispatch, _getState, api) => {
    const data = JSON.stringify({"postId":id,"body":value});
    const config = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      data : data
    };
    api('comments',config)
      .then(function (response) {
        if(response.status === 201){
          dispatch(Operation.loadPost(id));
        }
      })
      .catch(function (error) {
        dispatch(ActionCreator.loadOnePostError(error));
      });
  },
};
