import React from 'react'
import './Navbar.css'
import {
  BrowserRouter as Router, Route, Link, Redirect
} from 'react-router-dom'
// import Profile from '../Profile'

function Navbar() {
  return (

      <div>
        <div className="navbar">
          <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="UserHome">Home</Link>
                {/* <a className="nav-link" href="home">Home</a> */}
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="Programs">Programs</Link>
                {/* <a className="nav-link" href="home">Programs</a> */}
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="Challenges">Challenges</Link>
                {/* <a className="nav-link" href="home">Challenges</a> */}
              </li>
              <li className="nav-item active n-p">
                <Link className="nav-link" to="Profile"><img src="https://img.icons8.com/color/48/000000/anonymous-mask.png" alt=""/></Link>
                {/* <Route path='/profile' component={Profile}/> */}
                {/* <a className="nav-link" href="Profile"></a> */}
              </li>
          </ul>
        </div> 
      </div>
    
  )
}

export default Navbar
