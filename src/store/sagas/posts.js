import { put, call } from "redux-saga/effects";

import {
    GET_POSTS_SUCCESS,
    GET_POSTS_FAIL, CREATE_POST_SUCCESS, CREATE_POST_FAIL
} from "../action/actionTypes";

const postsURL = 'https://jsonplaceholder.typicode.com/posts?userId=';
let ids = 100;
function fetchPostsData(userId) {
    let url = `${postsURL}${userId}`;
        return (fetch(url)
            .then(response => response.json()));
}

function createPostData(userId, postTitle, post) {
    // let url = `${postsURL}${userId}&title=${postTitle}&body=${post}`;
    ids++;
    let newPost = {
        "userId": userId,
        "id": ids+1,
        "title": postTitle,
        "body": post
    };
    // console.log(url)
    // return (fetch(url, {
    //     method: "PUT"
    // }).then(response => response.json()));
    return (fetchPostsData(userId)).then( response => {
        return {"response": response,
            "newPost": newPost};
    } )
}

export function* createPost(action) {
    let { userId, postTitle, post } = action.payload;
    try {
        // grab the data from the posts api
        const response = yield call(createPostData, userId, postTitle, post);
        yield put({ type: CREATE_POST_SUCCESS, payload: response });
    } catch (e) {
        yield put({ type: CREATE_POST_FAIL, payload: e });
    }
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

