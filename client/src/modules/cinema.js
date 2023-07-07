import { createAction, handleAction } from "redux-actions";
import {takeLatest} from 'redux-saga/effects';
import  createRequestSaga, {createRequestActionTypes } from "../lib/createRequestSaga";
import * as cinemaAPI from "../lib/api/cinema";

const [
    READ_REGION,
    READ_REGION_SUCCESS,
    READ_REGION_FAILURE,
] = createRequestActionTypes('cinema/READ_REGION');