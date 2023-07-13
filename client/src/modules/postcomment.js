import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import { createAction, handleActions } from "redux-actions";
import * as postsAPI from "../lib/api/posts";
import { takeLatest } from "redux-saga/effects";

const INITIALIZE_POSTCOMMENT = "postcomment/INITIALIZE_POSTCOMMENT";
const UNLOAD_POSTCOMMENT = "postcomment/UNLOAD_POSTCOMMENT";
const [WRITE_POSTCOMMET, WRITE_POSTCOMMET_SUCCESS, WRITE_POSTCOMMET_FAILURE] =
  createRequestActionTypes("postcomment/WRITE_POSTCOMMET");
const [
  REMOVE_POSTCOMMENT,
  REMOVE_POSTCOMMENT_SUCCESS,
  REMOVE_POSTCOMMENT_FAILURE,
] = createRequestActionTypes("postcomment/REMOVE_POSTCOMMENT");

export const initializePostComment = createAction(INITIALIZE_POSTCOMMENT);
export const unloadPostComment = createAction(UNLOAD_POSTCOMMENT);
export const writePostComment = createAction(
  WRITE_POSTCOMMET,
  ({ userId, content, postNum }) => ({
    userId,
    content,
    postNum,
  })
);
