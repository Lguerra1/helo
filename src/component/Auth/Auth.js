import React, { Component } from 'react';
import {connect} from 'react-redux'
import {login} from '../../ducks/reducer';


class Auth extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''            
        }

        this.login = this.login.bind(this);
    }

    login() {
        const {login, history } = this.props
        const {username, password} = this.state
        login({ username, password}, history);
    }


    inputUsername(val) {
        this.setState({username: val})

    }

    inputPassword(val) {
        this.setState({password: val})
    }

    render() {
        return (
            <div>
                Auth
                <input onChange={(e) => this.inputUsername(e.target.value)} />
                <input onChange={(e) => this.inputPassword(e.target.value)} />


                <button onClick={ this.login}>Login</button>
                <button onClick={this.register}>Register</button>
            </div>
        )
    }
}

export default connect( state => state, { login } )(Auth);
