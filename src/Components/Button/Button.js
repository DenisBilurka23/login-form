import classes from './Button.module.css'
const Button = ({name, color, onClick}) => (
    <div className={classes.Button}>
        <input onClick={onClick} type="submit" value={name} style={{background:color}}/>
    </div>
)
export default Button