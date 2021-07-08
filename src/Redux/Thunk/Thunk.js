import axios from "axios";
import {
    AuthSuccess,
    ClearError,
    CreateProfile,
    LoadError,
    Logout,
    RemoveNotification, ToggleButton
} from "../ActionCreators/ActionCreators";

export const AuthTC = (email, password, isLogin, history, form) => async dispatch => {
    let url = ''
    isLogin ? url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDVrvK0zv20ZTN0aMQEE2V-5Vl5FyEwM7E'
        : url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDVrvK0zv20ZTN0aMQEE2V-5Vl5FyEwM7E'
    dispatch(ToggleButton())
    try {
        const response = await axios.post(url, {email, password, returnSecureToken: true})
        const token = response.data.idToken
        dispatch(ToggleButton())
        if (token) {
            form.restart()
            dispatch(ClearError())
            if (isLogin) {
                localStorage.setItem('token', token)
                dispatch(AuthSuccess(token))
                history.push('/home')
            } else {
                dispatch(CreateProfile())
                history.push('/')
            }
        }
    } catch (e) {
        dispatch(LoadError(e.response.data.error.message.split('_').join(' ').toLowerCase()))
        dispatch(ToggleButton())
        isLogin && dispatch(RemoveNotification())
    }
}
export const AutoLoginTC = () => dispatch => {
    const token = localStorage.getItem('token')
    token ? dispatch(AuthSuccess(token)) : dispatch(Logout())
}
