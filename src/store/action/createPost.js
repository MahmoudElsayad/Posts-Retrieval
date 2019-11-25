import { CREATE_POST } from './actionTypes';

export function createPost(userId, postTitle, post) {
    return {
        type: CREATE_POST,
        payload: { userId, postTitle, post }
    }
}