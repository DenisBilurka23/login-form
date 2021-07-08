import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from './Redux/Redux'

const app = (
    <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}><App/></BrowserRouter>
    </Provider>
)
ReactDOM.render(app, document.getElementById('root'))

reportWebVitals()
