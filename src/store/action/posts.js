import { GET_POSTS } from './actionTypes';

export function getPosts(userId) {
    return {
        type: GET_POSTS,
        payload: { userId }
    }
}