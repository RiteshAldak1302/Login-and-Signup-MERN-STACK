import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import "./login.css"

const Login = () => {
   
    const [user ,setUser]= useState({
        email:"",
        password:"",
        
    })
    const handleOnChange = (e)=>{
        const {name ,value }= e.target
        
        setUser({...user,
            [name]:value
        })
    }

    return (
        <div className="container homepage">
            <form>
                <h1 className="text-center">Log In</h1>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" name="name"  value={user.email} id="exampleInputEmail1" onChange={handleOnChange}  aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" name="email" value={user.password} onChange={handleOnChange}  id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input"  id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <Link type="submit" to="/" class="btn btn-primary">Sign In</Link>
</form>
        </div>
    )
}

export default Login
