import {connect} from "react-redux";
import {Logout} from "../../Redux/ActionCreators/ActionCreators";
import {useHistory} from "react-router-dom";
import Button from "../../Components/Button/Button";
import classes from './Main.module.css'

const Main = ({Logout}) => {
    const history = useHistory()
    const logoutHandler = () => {
        Logout()
        history.push('/')
    }
    return (
        <div className={classes.Main}>
            <h1><span>Success!</span> The app is authorized</h1>
            <Button onClick={logoutHandler} name='Logout' color={'#ed1f24'}/>
        </div>
    )
}
export default connect(null, {Logout})(Main)
