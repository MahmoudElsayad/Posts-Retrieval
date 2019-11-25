import {
    GET_POSTS,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAIL, CREATE_POST, CREATE_POST_SUCCESS, CREATE_POST_FAIL,
} from "../action/actionTypes";

const initialState = {
    posts: [],
    error: ""
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                error: ""
            };
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: Object.keys(action.payload).map((k) => action.payload[k])
            };
        case GET_POSTS_FAIL:
            return {
                ...state,
                error: action.payload
            };
        case CREATE_POST:
            return {
                ...state,
                error: ""
            };
        case CREATE_POST_SUCCESS:
            return {
                ...state,
                posts: Object.keys(action.payload.response).map((k) => action.payload.response[k]).concat([action.payload.newPost])
            };
        case CREATE_POST_FAIL:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}