import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const Signup = () => {


    const [user ,setUser]= useState({
        name:"",
        email:"",
        password:"",
        cPassword:""
    })
    const handleOnChange = (e)=>{
        const {name ,value }= e.target
        
        setUser({...user,
            [name]:value
        })
    }

    return (
        <div className="container">
             <form  >
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text"   className="form-control"   name="name"  value={user.name} id="name" onChange={handleOnChange} aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email"   className="form-control"   name="email"  value={user.email} id="email" onChange={handleOnChange} aria-describedby="emailHelp" minLength={5} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="Password" className="form-label">Password</label>
    <input type="password"   className="form-control" name="password"  value={user.password} id="Password" onChange={handleOnChange} minLength={5} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="cPassword" className="form-label">Confirm Password</label>
    <input type="password"   className="form-control" name="cpassword"  value={user.cPassword} id="cPassword" onChange={handleOnChange} minLength={5} required/>
  </div>
  <Link type="submit" to="/" class="btn btn-primary">Sign Up</Link>
  
</form>
        </div>
    )
}

export default Signup
