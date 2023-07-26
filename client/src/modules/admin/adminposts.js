import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";
import * as postsAPI from "../../lib/api/posts";
import { takeLatest } from "redux-saga/effects";

const [ADMINLIST_POSTS, ADMINLIST_POSTS_SUCCESS, ADMINLIST_POSTS_FAILURE] =
  createRequestActionTypes("adminposts/ADMINLIST_POST");

export const AdminListPost = createAction(
  ADMINLIST_POSTS,
  ({ tags, name, page }) => ({
    tags,
    name,
    page,
  })
);

const AdminPostListSaga = createRequestSaga(
  ADMINLIST_POSTS,
  postsAPI.listPosts
);
export function* adminpostsSaga() {
  yield takeLatest(ADMINLIST_POSTS, AdminPostListSaga);
}

const initialSate = {
  posts: null,
  error: null,
  lastPage: 1,
};

const adminposts = handleActions(
  {
    [ADMINLIST_POSTS_SUCCESS]: (state, { payload: posts }) => ({
      ...state,
      posts: posts.postlists,
      lastPage: posts.totalPages,
    }),
    [ADMINLIST_POSTS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialSate
);

export default adminposts;
