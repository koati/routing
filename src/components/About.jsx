import React from 'react'
import { Outlet, Link } from "react-router-dom"

const About = () => {
  return (
    <div className="container">
      <h1>This is the <u>about</u> page</h1>
      <div>
        <Link to="company">Company</Link>
        <Link to="goal">Goal</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default About
