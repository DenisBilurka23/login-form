import {AUTH_SUCCESS, CLEAR_ERROR, LOAD_ERROR, LOGOUT, PROFILE_CREATE} from "../ActionTypes/ActionTypes";

const initialState = {
    token: null,
    error: null,
    profileCreationSuccess: false
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_SUCCESS: {
            return {
                ...state,
                token: action.token
            }
        }
        case LOGOUT: {
            return {
                ...state,
                token: null
            }
        }
        case LOAD_ERROR: {
            return {
                ...state,
                error: action.error
            }
        }
        case CLEAR_ERROR: {
            return {
                ...state,
                error: null
            }
        }
        case PROFILE_CREATE: {
            return {
                ...state,
                profileCreationSuccess: true
            }
        }
        default: {
            return state
        }
    }
}
export default AuthReducer
