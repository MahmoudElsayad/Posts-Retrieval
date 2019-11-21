import {ARCHIVE_POST, UNDO_ARCHIVE} from '../action/actionTypes';

const INITIAL_STATE = [];

const applyArchiveStory = (state, action) =>
    [ ...state, action.id ];

function archiveReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case ARCHIVE_POST : {
            return applyArchiveStory(state, action.payload);
        }
        case UNDO_ARCHIVE : {
            return [];
        }
        default : return state;
    }
}
export default archiveReducer;