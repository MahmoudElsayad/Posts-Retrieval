import { all, takeLatest } from "redux-saga/effects";
import {GET_POSTS, GET_COMMENTS, CREATE_POST} from "../action/actionTypes";
import { retrievePost, createPost } from "./posts";
import { retrieveComments } from './comments';

export default function* rootSaga() {
    yield all([
        takeLatest(GET_POSTS, retrievePost),
        takeLatest(GET_COMMENTS, retrieveComments),
        takeLatest(CREATE_POST, createPost)
    ]);
}