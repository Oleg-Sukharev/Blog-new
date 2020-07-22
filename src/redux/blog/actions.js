export const ActionType = {
  LOAD_POSTS: 'LOAD_POSTS',
  LOAD_POSTS_ERROR: 'LOAD_POSTS_ERROR',

  LOAD_ONE_POST: 'LOAD_ONE_POST',
  LOAD_ONE_POST_ERROR: 'LOAD_ONE_POST_ERROR',
  ONE_POST_RESET: 'ONE_POST_RESET',
};

export const ActionCreator = {
  loadPosts: (posts) => ({
    type: ActionType.LOAD_POSTS,
    payload: posts,
  }),
  loadPostsError: (error) => ({
    type: ActionType.LOAD_POSTS_ERROR,
    payload: error,
  }),

  loadOnePost: (post) => ({
    type: ActionType.LOAD_ONE_POST,
    payload: post,
  }),

  loadOnePostError: (error) => ({
    type: ActionType.LOAD_ONE_POST_ERROR,
    payload: error,
  }),

  OnePostReset: () => ({
    type: ActionType.ONE_POST_RESET,
  }),
};

