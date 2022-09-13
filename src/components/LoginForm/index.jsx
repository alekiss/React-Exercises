import React, { useState } from 'react'
import "./styles.css"

const LoginForm = ({ Login, error }) => {

  const[details, setDetails] = useState({name: "", email: "", password: "",})

  const submitHandler = e => {
    e.preventDefault();

    Login(details)
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Login</h2>
        {(error != "") ? (
          <div className="error">{error}</div>
        ) : ""}
        <div className="form-group">
          <label>Name:</label>
          <input className="form-input" type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input className="form-input" type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input className="form-input" type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
        </div>
        <span>
          <input type="submit" value="SING IN" className="submit"/>
        </span>
      </div>
    </form>
  )
}

export default LoginForm