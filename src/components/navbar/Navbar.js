import React from 'react'

import {
    Link
} from "react-router-dom";
// import Login from '../login/Login';

const Navbar = () => {
    return (
        <>


            {/* <style>
        body {
		background-color: burlywood;
		background-repeat: no-repeat;
		background-size: 75% 75%;
		background-attachment: fixed;
		background-position: left center;
	}
</style> */}
            <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-dark
             navbar-inverse" id="navbar">

                <div className="container-fluid">
                    <div className="navbar-header">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-3 nav-link-ltr">
                                <Link className="nav-link active font hover-underline-animation" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item mx-3  ">
                                <Link className="nav-link active font hover-underline-animation" to="/">About</Link>
                            </li>

                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                        <Link className="btn btn-primary btn-sm my-3 mx-3" to="/signup" role="button">Signup</Link>
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                   <li><Link  to="/login" data-target="#loginModal"><span class="glyphicon glyphicon-log-in"></span> login</Link></li>
                </ul>
                    </div>
                </div>

            </nav>
            </div>
            


        </>
    )
}

export default Navbar
