import { call } from "redux-saga/effects";
import { put } from "redux-saga/effects";
import { finishLoading, startLoading } from "../modules/loading";

export const createNoneAxiosActionTypes = (type) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};

export default function createNoneAxiosSaga(type) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action) {
    yield put(startLoading(type));
    try {
      yield put({
        type: SUCCESS,
        payload: "어크로스 더 유니버스",
      });
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      });
    }
    yield put(finishLoading(type));
  };
}
