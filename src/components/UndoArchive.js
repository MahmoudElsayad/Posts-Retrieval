import React from 'react';
import { undoArchivePost } from '../store/action/undoArchive';
import Button from "./Button";
import {connect} from "react-redux";

function UndoArchive( { onUndoArchivePost }) {
    return (
        <span>
                        <Button className="undo" onClick={() => {onUndoArchivePost()}}> Undo Archive </Button>
        </span>
    );
}

const mapDispatchToProps = dispatch => ({
    onUndoArchivePost: () => dispatch(undoArchivePost()),
});

export default connect(null, mapDispatchToProps)(UndoArchive);