import {
    AUTH_SUCCESS,
    CLEAR_ERROR,
    DELETE_PROFILE_NOTIFICATION,
    LOAD_ERROR,
    LOGOUT,
    PROFILE_CREATE, TOGGLE_BUTTON
} from "../ActionTypes/ActionTypes";

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
export const RemoveNotification = () => ({type:DELETE_PROFILE_NOTIFICATION})
export const ToggleButton = () => ({type: TOGGLE_BUTTON})