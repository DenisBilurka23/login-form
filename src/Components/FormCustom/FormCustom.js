import classes from "./FormCustom.module.css"
import Button from "../Button/Button";
import {Field, Form} from "react-final-form";
import {useState} from "react";
import Input from "../Input/Input";
import {NavLink} from "react-router-dom";

const FormCustom = ({onSubmitHandler, color, name, login, error, profileCreated}) => {
    const [fields] = useState([
        {name: 'email', type: 'E-mail'},
        {name: 'password', type: 'Password'}
    ])
    const fieldGenerator = fields.map(item => {
        return <Field
            key={Math.random()}
            name={item.name}
            render={({input, meta}) => (
                <Input
                    type={item.type}
                    input={input}
                    meta={meta}
                />
            )}
        />
    })
    return (
        <div>
        <Form
            onSubmit={onSubmitHandler}
            validate={values => {
                const errors = {}
                if (!values.email) {
                    errors.email = 'Required'
                }
                if (!values.password) {
                    errors.password = 'Required'
                }
                return errors
            }}
            render={({handleSubmit}
            ) => (
                <form onSubmit={handleSubmit}>
                    <div className={classes.container}>
                        <div className={classes.fields}>
                            {fieldGenerator}
                        </div>
                        {error && <div className={classes.error}>{error}</div>}
                        {profileCreated &&
                        <div className={classes.profileCreate}>
                            <span>Profile successfully created!</span>
                            <span>You can sign in now</span>
                        </div>}
                        <div className={classes.buttonSection}>
                            <Button color={color} name={name}/>
                        </div>
                        {
                            login ?
                                <div className={classes.links}>
                                    <span>Dont have an account yet? </span>
                                    <NavLink to="/authorization/sign-up">Register here</NavLink>
                                </div> :
                                <div className={classes.links}>
                                    <span>Already have an account? </span>
                                    <NavLink to="/authorization/sign-in">Login here</NavLink>
                                </div>
                        }
                    </div>
                </form>
            )}
        />
        </div>
    )
}
export default FormCustom
