import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Nav extends Component {
    render() {


        return (
            <div>
                Nav
           <Link to='/dashboard'> <button>Home</button></Link>
                <Link to='/new'> <button>New Post</button></Link>
                <Link to='/'> <button>Auth</button></Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { username, profilepic } = state;
    return {
        username, profilepic

    }

}
export default connect(mapStateToProps)(Nav)