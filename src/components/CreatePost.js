import React, {Component} from 'react';
import { connect } from 'react-redux';
import "./CreatePost.css"
import { createPost } from '../store/action/createPost';
import * as PropTypes from "prop-types";

class CreatePost extends Component {
    state = {
        postTitle: '',
        post: '',
        userId: this.props.userId,
        error: '',
        onCreatePost: this.props.onCreatePost
    };

    sendRequest = e => {
        let { onCreatePost, userId, post } = this.state;
        e.preventDefault();
        onCreatePost(userId,this.state.postTitle, post);
    };

    handleTitle = title => this.setState({postTitle: title.target.value});
    handlePost = post => this.setState({post: post.target.value});

    render() {
        let { view, postTitle, post} = this.props;
        if (view)
            return (
                <div className="create-post center">
                    <form className="form" onSubmit={ e => this.sendRequest(e)}>
                        <input type="text" placeholder="Title" value={postTitle} onChange={this.handleTitle}/>
                        <input type="text" placeholder="Post" value={post} onChange={this.handlePost}/>
                        <button type="submit" id="login-button">Post</button>
                    </form>
                </div>
            );
        else
            return (
                <div>
                </div>
            )

    }
}

CreatePost.propTypes = {
    userId: PropTypes.any,
    onCreatePost: PropTypes.any,
    view: PropTypes.any
};

const mapDispatchToProps = dispatch => ({
    onCreatePost: (userId, postTitle, post) => dispatch(createPost(userId, postTitle, post))
});

export default connect(null, mapDispatchToProps)(CreatePost);
