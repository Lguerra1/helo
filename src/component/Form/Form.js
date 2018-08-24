import React, {Component} from 'react';
import {connect} from 'react-redux';

class Form extends Component {
    render(){
        return(
            <div>
                <h1> New Post</h1>
                <p>Title</p>
                <input />
                <p>Image</p>
                <input />
                <p>Content</p>
                <input />
                <button>Post</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    const {userId}=state
    return {
        userId
    }
}

export default connect (mapStateToProps)(Form)