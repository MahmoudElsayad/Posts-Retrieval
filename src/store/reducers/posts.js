import {
    GET_POSTS,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAIL,
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
        default:
            return state;
    }
}