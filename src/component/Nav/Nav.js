import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

function Nav() {
    
    return (
        <div>
            Nav
           <Link to='/dashboard'> <button>Home</button></Link>
            <Link to='/post/:postid'> <button>New Post</button></Link>
            <Link to='/'> <button>Auth</button></Link>
            
            

        </div>
    )
}

function mapStateToProps(state){
    const {username, profilepic}=state;
        return {
            username, profilepic
            
        }
        
}
export default connect (mapStateToProps) (Nav)