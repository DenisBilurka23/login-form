import './App.css'
import Login from "./Pages/Login/Login"
import {Switch, Route, Redirect} from 'react-router-dom'
import {connect} from "react-redux";
import Main from "./Pages/Main/Main";
import {useEffect} from "react";
import {AutoLoginTC} from "./Redux/Thunk/Thunk";

const App = ({authorized, AutoLoginTC}) => {
    useEffect(() => {
        AutoLoginTC()
    }, [])
    return (
        <div>
            <Switch>
                <Route path='/login-form' render={() => <Redirect to='authorization/sign-in'/>}/>
                <Route path='/authorization' component={Login}/>
                {authorized && <Route path='/' component={Main}/>}
            </Switch>
        </div>

    )
}
const mapStateToProps = (state) => ({
    authorized: !!state.AuthReducer.token
})
export default connect(mapStateToProps, {AutoLoginTC})(App);
