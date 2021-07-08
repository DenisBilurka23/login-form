import {AUTH_SUCCESS, CLEAR_ERROR, LOAD_ERROR, LOGOUT, PROFILE_CREATE} from "../ActionTypes/ActionTypes";

export const AuthSuccess = (token) => ({type: AUTH_SUCCESS, token})
export const Logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('localId')
    localStorage.removeItem('expiresIn')
    return {type: LOGOUT}
}
export const LoadError = error => ({type: LOAD_ERROR, error})
export const ClearError = () => ({type: CLEAR_ERROR})
export const CreateProfile = () => ({type: PROFILE_CREATE})