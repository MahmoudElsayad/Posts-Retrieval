import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import "./Search.css"
import Button from "./Button";

import { getPosts } from '../store/action/posts';

class Search extends Component {

    state = {
        searchTerm: '',
        error: '',
    };

    searchPosts = (e) => {
        const userId = this.state.searchTerm;
        e.preventDefault();
        this.props.onGetPosts(userId);
    };

    handleChange = (e) => {
        this.setState({ searchTerm: e.target.value })
    };

    render() {
        const { searchTerm, error } = this.state;
        return (
            <form onSubmit={this.searchPosts}>
                <p>Enter user ID to retrieve posts</p>
                <SearchWrapper>
                    <SearchBar type="text" value={searchTerm} onChange={this.handleChange} />
                    <Button className="search-button" type="submit">Search</Button>
                </SearchWrapper>
                {error && <Error>{error}</Error>}
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    onGetPosts: id => dispatch(getPosts(id)),
});

export default connect(null, mapDispatchToProps)(Search);

const SearchWrapper = styled.div`
    display: flex;
    flex-direction:row;
    width: 80%;
    width: 500px;
    margin: 25px auto;
`;

const SearchBar = styled.input`
    padding: 14px 20px;
    border: 1px solid #f9f9f9;
    color: #8D96AA;
    font-size: 18px;
    width: 250px;
    border-radius: 6px 0px 0px 6px;
    flex:7;
`;

const SearchButton = styled.button`
    background-color: #2F5EE5;
    padding: 14px 20px;
    border:none;
    border-radius: 0px 6px 6px 0px;
    cursor: pointer;
    flex:1;
`;


const Error = styled.span`
    color: red;
    padding: 5px;
    display:block;
    font-size:12px;
`