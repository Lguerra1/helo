import React, {Component} from 'react';
import {connect} from 'react-redux'

class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            posts: []
        }
    }
    render(){
        return(
            <div>
                Dashboard
                <input></input>
                <button>Search</button>
                <button>Reset</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {userId} = state
    return {
        userId
    }
}

export default connect (mapStateToProps) (Dashboard)