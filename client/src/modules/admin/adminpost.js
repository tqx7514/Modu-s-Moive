import { takeLatest } from "redux-saga/effects";
import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";
import * as adminpostsAPI from "../../lib/api/admin/adminposts";

const [ADMINREAD_POST, ADMINREAD_POST_SUCCESS, ADMINREAD_POST_FAILURE] =
  createRequestActionTypes("adminpost/ADMINREAD_POST");
const ADMINUNLOAD_POST = "adminpost/ADMINUNLOAD_POST";

export const AdminReadPost = createAction(ADMINREAD_POST, (postNum) => postNum);
export const AdminUnloadPost = createAction(ADMINUNLOAD_POST);

const AdminReadPostSaga = createRequestSaga(
  ADMINREAD_POST,
  adminpostsAPI.AdminReadPost
);
export function* adminPostSaga() {
  yield takeLatest(ADMINREAD_POST, AdminReadPostSaga);
}

const initialSate = {
  post: null,
  error: null,
};

const adminPost = handleActions(
  {
    [ADMINREAD_POST_SUCCESS]: (state, { payload: { post } }) => ({
      ...state,
      post,
    }),
    [ADMINREAD_POST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [ADMINUNLOAD_POST]: () => initialSate,
  },
  initialSate
);

export default adminPost;
