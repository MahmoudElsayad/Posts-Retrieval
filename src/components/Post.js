import React from 'react';
import { connect } from 'react-redux';
import { ButtonInline } from './Button';
import Comments from './Comments';
import {archivePost} from '../store/action/archive';
import {getComments} from '../store/action/comments';
import {hideComments} from '../store/action/hideComments';
import "./Post.css";

const Post = ({ post, onArchive, onGetComments, hideComments }) => {
    const {
        title,
        body,
        id
    } = post;

    let show = false;

    const toggleComments = () => {
        show = !show;
        if (show)
            onGetComments(id);
        else
            hideComments();
    };

    return (
        <div className="post">
            <h3>{title}</h3>
            <p className="post-para">{body}</p>
            <Comments id={id} />
            <ButtonInline className="button-left-inline greyed" onClick={() => {onArchive(id)}}>
                Archive
            </ButtonInline>
            <ButtonInline className="button-inline" onClick={toggleComments}>
                Comments
            </ButtonInline>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    onArchive: id => dispatch(archivePost(id)),
    onGetComments: id => dispatch(getComments(id)),
    hideComments: id => dispatch(hideComments())
});

export default connect(
    null,
    mapDispatchToProps
)(Post);