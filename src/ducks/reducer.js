import axios from 'axios';



const initialState = {
    user: '',
    userid: '',
    profilepic: ''
}

const USER_NAME = 'USER_NAME'
const USER_ID = "USER_ID"
const PROFILE_PIC = "PROFILE_PIC"
const LOGIN = "LOGIN"

export default function(state = initialState, action) {
    let {payload} = action;
    switch (action.type) { 
        case LOGIN:
        return Object.assign({}, state, {user: payload.username})
        case USER_NAME:
            return Object.assign({}, state, { username: action.payload});
        case USER_ID:
            return Object.assign({}, state, {userid: action.payload});
        case PROFILE_PIC:
            return Object.assign({}, state, {profilepic: action.payload});
            
        default: return state
    }

}

export function login(obj, history) {
    return {
        type: LOGIN,
        payload: axios.post('/api/login'.login, obj ).then(response => {
            history.push('/dashboard');
            return response.data;
        })

    };
}

export function inputUsername(username) {
    return {
        type: USER_NAME,
        payload: username
    }
}

export function userId(userid){
    return {
        type: USER_ID,
        payoload: userid
    }
}

export function userProfilePic(profilepic){
    return {
        type: PROFILE_PIC,
        payload: profilepic
    }
}