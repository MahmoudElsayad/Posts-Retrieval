import React from 'react';
import { connect } from 'react-redux';
import "./Comment.css";

const Comment = ({ comment }) => {
    const {
        name,
        email,
        body
    } = comment;

    return (
        <div className="comment">
            <h4>{name}</h4>
            <h5>{email}</h5>
            <p>{body}</p>
        </div>
    );
};

export default connect(
    null,
    null
)(Comment);