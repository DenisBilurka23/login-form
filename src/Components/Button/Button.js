import classes from './Button.module.css'
const Button = ({name, color, onClick, disable}) => (
    <div className={classes.Button}>
        <input disabled={disable} onClick={onClick} type="submit" value={name} style={{background:color}}/>
    </div>
)
export default Button