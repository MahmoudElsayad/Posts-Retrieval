import {GET_COMMENTS, GET_COMMENTS_FAIL, GET_COMMENTS_SUCCESS, HIDE_COMMENTS} from "../action/actionTypes";

const initialState = {
    comments: [],
    error: ""
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_COMMENTS_SUCCESS:
            return {
                ...state,
                comments: Object.keys(action.payload).map((k) => action.payload[k])
            };
        case GET_COMMENTS_FAIL:
            return {
                ...state,
                error: action.payload
            };
        case GET_COMMENTS:
            return {
                ...state,
                error: ""
            };
        case HIDE_COMMENTS:{
            return [];
        }
        default:
            return state;
    }
}