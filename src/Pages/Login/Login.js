import Title from "../../Components/Title/Title";
import FormCustom from "../../Components/FormCustom/FormCustom";
import {Route, Switch, useHistory} from "react-router-dom";
import {connect} from "react-redux";
import {AuthTC} from '../../Redux/Thunk/Thunk'

const Login = ({AuthTC, error, profileCreated}) => {
    const history = useHistory()
    const signInHandler = async (values, form) => {
        AuthTC(values.email, values.password, true, history, form)
    }
    const signUpHandler = async (values, form) => {
        AuthTC(values.email, values.password, false, history, form)
    }
    return (
        <div className="App">
            <Title/>
            <Switch>
                <Route path='/authorization/sign-in'
                       render={() => <FormCustom profileCreated={profileCreated} error={error} name='Login' login={true} onSubmitHandler={signInHandler}/>}/>
                <Route path='/authorization/sign-up'
                       render={() => <FormCustom error={error} name='Sign Up' login={false} onSubmitHandler={signUpHandler}/>}/>
            </Switch>
        </div>
    )
}
const mapStateToProps = state => ({
    error: state.AuthReducer.error,
    profileCreated: state.AuthReducer.profileCreationSuccess
})
export default connect(mapStateToProps, {AuthTC})(Login)