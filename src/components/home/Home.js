import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="container  text-center">
            <h1 className="text-center">WELCOME TO HOME PAGE</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore asperiores odio delectus? Modi facilis minus saepe ducimus quidem, officiis culpa odit sapiente blanditiis velit vero aspernatur in minima eligendi odio similique a tempora fugiat dolore sunt. Inventore, temporibus ut. Quidem assumenda explicabo soluta porro culpa reiciendis nesciunt, magni nihil possimus.
            </p>
            <Link className="btn btn-primary " to="/login">Log Out</Link>
        </div>
    )
}

export default Home
