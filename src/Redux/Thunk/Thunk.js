import axios from "axios";
import {AuthSuccess, ClearError, CreateProfile, LoadError, Logout} from "../ActionCreators/ActionCreators";

export const AuthTC = (email, password, isLogin, history, form) => async dispatch => {
    let url = ''
    isLogin ? url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDVrvK0zv20ZTN0aMQEE2V-5Vl5FyEwM7E'
        : url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDVrvK0zv20ZTN0aMQEE2V-5Vl5FyEwM7E'
    try {
        const response = await axios.post(url, {email, password, returnSecureToken: true})
        const token = response.data.idToken
        if (token) {
            form.restart()
            dispatch(ClearError())
            if (isLogin) {
                localStorage.setItem('token', token)
                dispatch(AuthSuccess(token))
                history.push('/')
            } else {
                dispatch(CreateProfile())
                history.push('/authorization/sign-in')
            }
        }
    } catch (e) {
        dispatch(LoadError(e.response.data.error.message.split('_').join(' ').toLowerCase()))
    }
}
export const AutoLoginTC = () => dispatch => {
    const token = localStorage.getItem('token')
    token ? dispatch(AuthSuccess(token)) : dispatch(Logout())
}
