import React from 'react';
import { connect } from 'react-redux';
import "./Comments.css";
import Comment from "./Comment";
import {
    getComments
} from '../store/selectors/comments';

const Comments= ({ comments, id }) => {
    const renderComment = (comment, id) => {
        if (comment !== undefined){
            if (comment.postId === id){
                return <Comment
                    key={comment.id}
                    comment={comment}
                />
        }
        }
    };

    return (
        <div className="comments">
            {(comments || []).map(comment => renderComment(comment, id))}
        </div>
    );
};

const mapStateToProps = state => ({ comments: getComments(state)});

export default connect(
    mapStateToProps,
    null
)(Comments);