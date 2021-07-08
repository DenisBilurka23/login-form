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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            <Switch>
                {authorized && <Route path='/home' component={Main}/>}
                <Route path='/' component={Login}/>
            </Switch>
        </div>

    )
}
const mapStateToProps = (state) => ({
    authorized: !!state.AuthReducer.token
})
export default connect(mapStateToProps, {AutoLoginTC})(App);
