import { combineReducers } from "redux";
import posts from "./posts";
import archiveReducer from "./archive";
import comments from "./comments";

const rootReducer = combineReducers({
    postsState: posts,
    archiveState: archiveReducer,
    commentsState: comments,
});

export default rootReducer;