import React from 'react'

export const Login = (props)=>{
    return(
        <div>
            <h1>Login</h1>
            <input type="text" onChange={ props.userInput }></input> <br />
            <input type="password" onChange = { props.userPass }></input> <br />
            <input type="button" value="login" onClick={props.checkLogin}></input>
        </div>
    )
}