import './App.css';
import Title from "./Components/Title/Title"
import Input from "./Components/Input/Input"
import {useState} from "react";
import Button from "./Components/Button/Button";
import {Form, Field} from 'react-final-form'

const App = () => {
    const [user] = useState({
        email: 'email@gmail.com',
        password: 'qwerty123'
    })
    const [isFormValid, setIsFormValid] = useState()
    const [show, setShow] = useState(false)
    const [fields] = useState([
        {name:'email', type:'E-mail'},
        {name:'password', type:'Password'}
    ])


    const onSubmitHandler = values => {
        if (values.email === user.email && values.password === user.password) {
            setIsFormValid(true)
        } else {
            setIsFormValid(false)
        }
        setShow(true)
    }
    const fieldGenerator = fields.map(item => {
        return <Field
            key={Math.random()}
            name={item.name}
            render={({input, meta}) => (
                <Input
                    type={item.type}
                    isValid={isFormValid}
                    show={show}
                    input={input}
                    meta={meta}
                />
            )}
        />
    })
    return (
        <div className="App">
            <Title/>
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
                        <div className="container">
                            <div className="fields">
                                {fieldGenerator}
                            </div>
                            <Button name={'Login'}/>
                            <div className="reset">
                                <span>Forgot your password? </span>
                                <a href="/">Reset it here</a>
                            </div>
                        </div>
                    </form>
                )}
            />
        </div>
    )
}

export default App;
