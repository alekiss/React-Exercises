import React, { useState } from 'react'
import LoginForm from '../../components/LoginForm'
import "./styles.css"

const Login = () => {

    const [user, setUser] = useState({name: "", email: ""})
    const [error,setError] = useState("")

    const adminUser = {
        email: 'admin@admin.com',
        password: '1234'
    }

    const Login = details => {
        if(details.email === adminUser.email && details.password === adminUser.password){
            console.log("Logged in")
            setUser({
                name: details.name,
                email: details.email
            })
        }else{
            setError("O e-mail e/ou senha estão incorretos.")
        }
    }

    const Logout = () => {
        setUser({name: "", email: ""})
    }


  return (
    <div className="login-container">
        {(user.email != "") ? (
            <div className="welcome">
                <h2>Welcome, <strong>{user.name}</strong></h2>
                <button className="logout" onClick={Logout}>Logout</button>
            </div>
        ) : (
            <LoginForm Login={Login} error={error} />
        )}
    </div>
  )
}

export default Login