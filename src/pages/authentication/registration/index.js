import { useState } from "react"
import axios from "axios";

function Register() {
    const [data, setData] = useState({
        'username' : '',
        'password' : '',
        'email' : ''
    })
    const [errorPassword, setErrorPassword] = useState('')
    return (
        <>
            <h1>Register Dinhi</h1>
            <p>{ errorPassword }</p>
            <input placeholder="username" onChange={(event) => {
                let d = data;
                setData({...d, username: event.target.value});
            }} />
            <input placeholder="email address" onChange={(event) => {
                let d = data;
                setData({...d, email: event.target.value});
            }} />
            <input placeholder="password" type="password" onChange={(event) => {
                let d = data;
                setData({...d, password: event.target.value});
            }} />
            <button onClick={() => {
                axios.post('http://localhost:8000/api/v1/accounts/users/', data).then(response => {
                    console.log(response.data)
                }).catch(error => {
                    const errorMessage = error.response.data;
                    setErrorPassword(errorMessage.password)
                })
            }}>Register</button>
        </>
    )
}

export default Register