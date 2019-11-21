import { ARCHIVE_POST } from './actionTypes';

export function archivePost(id) {
    return {
        type: ARCHIVE_POST,
        payload: { id }
    }
}