import { put, call } from "redux-saga/effects";

import {
    GET_POSTS_SUCCESS,
    GET_POSTS_FAIL
} from "../action/actionTypes";

const postsURL = 'https://jsonplaceholder.typicode.com/posts?userId=';

function fetchPostsData(userId) {
    let url = `${postsURL}${userId}`;
        return (fetch(url)
            .then(response => response.json()));
}

export function* retrievePost(action) {
    let { userId } = action.payload;
    try {
        // grab the data from the posts api
        const response = yield call(fetchPostsData, userId);
        yield put({ type: GET_POSTS_SUCCESS, payload: response });

    } catch (e) {
        yield put({ type: GET_POSTS_FAIL, payload: e });
    }
}

