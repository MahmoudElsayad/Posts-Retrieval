import { put, call } from "redux-saga/effects";

import {
    GET_COMMENTS_SUCCESS,
    GET_COMMENTS_FAIL
} from "../action/actionTypes";

const postsURL = 'https://jsonplaceholder.typicode.com/comments?postId=';

function fetchCommentsData(postId) {
    let url = `${postsURL}${postId}`;
    return (fetch(url)
        .then(response => response.json()));
}

export function* retrieveComments(action) {
    let { id } = action.payload;
    try {
        // grab the data from the posts api
        const response = yield call(fetchCommentsData, id);
        yield put({ type: GET_COMMENTS_SUCCESS, payload: response });

    } catch (e) {
        yield put({ type: GET_COMMENTS_FAIL, payload: e });
    }
}

