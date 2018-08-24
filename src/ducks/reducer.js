const initialState = {
    username: '',
    userid: '',
    profilepic: ''
}

const USER_NAME = 'USER_NAME'
const USER_ID = "USER_ID"
const PROFILE_PIC = "PROFILE_PIC"

export default function(state = initialState, action) {
    switch (action.type) { 

        case USER_NAME:
            return Object.assign({}, state, { username: action.payload});
        case USER_ID:
            return Object.assign({}, state, {userid: action.payload});
        case PROFILE_PIC:
            return Object.assign({}, state, {profilepic: action.payload});
    }

     return state
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