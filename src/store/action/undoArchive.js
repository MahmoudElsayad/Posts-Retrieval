import { UNDO_ARCHIVE } from './actionTypes';

export function undoArchivePost() {
    return {
        type: UNDO_ARCHIVE,
        payload: {  }
    }
}