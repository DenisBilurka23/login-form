import classes from './Input.module.css'
import iconEmail from '../../images/mail.png'
import iconPassword from '../../images/lock.png'
import success from '../../images/success.png'
import error from '../../images/error.png'

const Input = ({type, isValid, show, input, meta}) => {
    return (
        <div className={classes.Input}>
            <input type={type === 'Password' ? 'password' : 'email'}
                   autoComplete="on"
                   placeholder={type}
                   className={isValid ? classes.success : classes.null}
                   {...input}
            />
            <div className={classes.icon}>
                {type === 'E-mail' ? <img src={iconEmail} alt="icon"/>
                    : <img src={iconPassword} alt="icon"/>
                }
            </div>
            {show && isValid && <img className={classes.result} src={success} alt="status icon"/>}
            {show && type ==='E-mail' && !isValid &&
            <img className={classes.result} src={error} alt="status icon"/>}
            {!isValid && show && type==='E-mail' && <span className={classes.error}>Invalid Username</span>}
            {meta.error && meta.touched && <span className={classes.error}>{meta.error}</span>}
        </div>
    )
}
export default Input