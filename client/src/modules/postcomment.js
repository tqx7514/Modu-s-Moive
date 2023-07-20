import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import { createAction, handleActions } from "redux-actions";
import * as postsAPI from "../lib/api/posts";
import { takeLatest } from "redux-saga/effects";

const INITIALIZE_POSTCOMMENT = "postcomment/INITIALIZE_POSTCOMMENT";
const UNLOAD_POSTCOMMENT = "postcomment/UNLOAD_POSTCOMMENT";
const [
  WRITE_POSTCOMMENT,
  WRITE_POSTCOMMENT_SUCCESS,
  WRITE_POSTCOMMENT_FAILURE,
] = createRequestActionTypes("postcomment/WRITE_POSTCOMMENT");
const [
  REMOVE_POSTCOMMENT,
  REMOVE_POSTCOMMENT_SUCCESS,
  REMOVE_POSTCOMMENT_FAILURE,
] = createRequestActionTypes("postcomment/REMOVE_POSTCOMMENT");

const [READ_POSTCOMMENT, READ_POSTCOMMENT_SUCCESS, READ_POSTCOMMENT_FAILURE] =
  createRequestActionTypes("postcomment/READ_POSTCOMMENT");

export const initializePostComment = createAction(INITIALIZE_POSTCOMMENT);
export const unloadPostComment = createAction(UNLOAD_POSTCOMMENT);

export const readPostComment = createAction(
  READ_POSTCOMMENT,
  (postNum) => postNum
);
export const writePostComment = createAction(
  WRITE_POSTCOMMENT,
  ({ userId, content, postNum }) => ({
    userId,
    content,
    postNum,
  })
);

export const removePostComment = createAction(
  REMOVE_POSTCOMMENT,
  ({ commentNum, postNum }) => ({ commentNum, postNum })
);

export const readPostCommentSaga = createRequestSaga(
  READ_POSTCOMMENT,
  postsAPI.readPostComment
);

const writePostCommentSaga = createRequestSaga(
  WRITE_POSTCOMMENT,
  postsAPI.writePostComment
);

const removePostCommentSaga = createRequestSaga(
  REMOVE_POSTCOMMENT,
  postsAPI.removePostComment
);

export function* postCommentSaga() {
  yield takeLatest(READ_POSTCOMMENT, readPostCommentSaga);
  yield takeLatest(WRITE_POSTCOMMENT, writePostCommentSaga);
  yield takeLatest(REMOVE_POSTCOMMENT, removePostCommentSaga);
}

const initialState = {
  post: {
    userId: "",
    content: "",
    postNum: "",
  },
  comments: null,
  error: null,
  write: {
    userId: "",
    content: "",
    postNum: "",
    comment: null,
    commentError: null,
    originalCommentNum: null,
  },
};

const postcomment = handleActions(
  {
    [INITIALIZE_POSTCOMMENT]: (state) => ({
      ...state,
      write: initialState.write,
    }),
    [READ_POSTCOMMENT_SUCCESS]: (state, { payload: postcomment }) => ({
      ...state,
      // post: {
      //   userId: postcomment.post.userId,
      //   content: postcomment.post.content,
      //   postNum: postcomment.post.postNum,
      // },
      comments: postcomment,
    }),
    [READ_POSTCOMMENT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_POSTCOMMENT]: () => initialState,
    [WRITE_POSTCOMMENT_SUCCESS]: (state, { payload: comment }) => ({
      ...state,
      write: {
        ...state.write,
        comment,
      },
    }),
    [WRITE_POSTCOMMENT_FAILURE]: (state, { payload: commentError }) => ({
      ...state,
      write: {
        ...state.write,
        commentError,
      },
    }),
    [REMOVE_POSTCOMMENT_SUCCESS]: (state, { payload: comments }) => ({
      ...state,
      // post: {
      // ...state.post,
      // postNum: comments.postNum,
      // },
      comments: comments.postcomment,
    }),
    [REMOVE_POSTCOMMENT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState
);

export default postcomment;
