import React, { Component } from 'react';
import { connect } from 'react-redux';
import {inputUserName, userId, userProfilePic} from '../../ducks/reducer';

 class Auth extends Component {
   
    // componentDidMount() {

    // }

    // userLogin() {

    // }

    // registerUser() {

    // }

    render() {
        return (
            <div>
                Auth
                <button>Login</button>
                <button>Register</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    const {userId, userProfilePic, inputUserName} = state
    return {
        userId,  userProfilePic, inputUserName
    }
}
export default connect (mapStateToProps) (Auth)