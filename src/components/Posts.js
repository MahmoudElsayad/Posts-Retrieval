import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    getReadablePosts
} from '../store/selectors/posts';
import Post from './Post';
import './Posts.css'

class Posts extends Component {
    render() {
        const { posts } = this.props;
        return (
            <div className="posts">
                <h3 id="floating-counter">
                    {posts.length}
                </h3>
                {(posts || []).map(post =>
                    <Post
                        key={post.id}
                        post={post}
                    />)}
            </div>
        )
    }
}


const mapStateToProps = state => ({ posts: getReadablePosts(state)});

export default connect(mapStateToProps)(Posts);

