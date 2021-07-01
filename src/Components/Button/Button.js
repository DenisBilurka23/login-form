import classes from './Button.module.css'
const Button = ({name}) => (
    <div className={classes.Button}>
        <input type="submit" value={name}/>
    </div>
)
export default Button