import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.jsx'
import'./main.jsx'
import './App.css'
import {Link} from 'react-router-dom'

function Signup(){
    return(
        <div >
            <label>email</label>
            <input type='text'></input>
        </div>
    )
}

export default Signup;