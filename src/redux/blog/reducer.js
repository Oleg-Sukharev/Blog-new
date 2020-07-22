import { combineReducers } from 'redux';
import { ActionType } from './actions';

const postList = (state, action) => {

  if (state === undefined) {
    return {
      post: {},
      loading: true,
      error: null,
    }
  }
  switch (action.type) {
    case ActionType.LOAD_POSTS:
      return {
        posts: action.payload,
        loading: false,
        error: null,
      }
    case ActionType.LOAD_POSTS_ERROR:
      return {
        post: {},
        loading: false,
        error: action.payload,
      }
    default:
      return state;
  }
}

const postItem = (state, action) => {

  if (state === undefined) {
    return {
      post: {},
      loading: true,
      error: null,
      comments: {

      }
    }
  }
  switch (action.type) {
    case ActionType.LOAD_ONE_POST:
      return {
        post: action.payload,
        loading: false,
        error: null,
      };
    case ActionType.LOAD_ONE_POST_ERROR:
      return {
        post: {},
        loading: false,
        error: action.payload,
      }
    case ActionType.ONE_POST_RESET:
      return {
        post: {},
        loading: true,
        error: null,
      }
      case ActionType.REFRESH_COMMENTS:
        return {
          post: action.payload,
          loading: false,
          error: null,
      };
    default:
      return state;
  }
}


export const blogReducer = combineReducers({
  postList: postList,
  postItem: postItem,
});

