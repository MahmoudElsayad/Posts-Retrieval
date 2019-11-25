import React, {Component} from 'react';
import CreatePost from "./CreatePost";
import UndoArchive from "./UndoArchive";
import Button from "./Button";
import './Options.css';

class Options extends Component {

    state = {
        viewCreate: '',
    };

    handleChange = () => {
        this.setState({ viewCreate: !this.state.viewCreate })
    };

    createPostButton = () => {
        if (this.state.viewCreate){
            return "Done";
        }
        return "Create Post";
    };

    render() {
        const { post } = this.props;
        const { userId } = post || [];
        return (
            <div className="options">
                {this.state.viewCreate && <CreatePost userId={userId} view={this.state.viewCreate}/>}
                <UndoArchive/>
                <span><Button onClick={this.handleChange}>
                    {this.createPostButton()}
                </Button></span>
            </div>
        );

    }
}




export default Options;