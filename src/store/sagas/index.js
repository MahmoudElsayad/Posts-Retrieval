import { all, takeLatest } from "redux-saga/effects";
import { GET_POSTS, GET_COMMENTS } from "../action/actionTypes";
import { retrievePost } from "./posts";
import { retrieveComments } from './comments';

export default function* rootSaga() {
    yield all([
        takeLatest(GET_POSTS, retrievePost),
        takeLatest(GET_COMMENTS, retrieveComments)
    ]);
}