import React, { Component } from 'react'
import './Navbar.css'
import {
  BrowserRouter as Router, Route, Link, Redirect
} from 'react-router-dom'
// import Profile from '../Profile'

export default class Navbar extends Component {
  render() {
    return (


      <div className="navbar ">
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
            <li className="nav-item active">
              <Link className="nav-link" to="Store">Store</Link>
              {/* <a className="nav-link" href="home">Challenges</a> */}
            </li>
        
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link username" to="Profile">{this.props.user.username}</Link>
            {/* <a className="nav-link" href="home">Home</a> */}
          </li>
          <li className="nav-item ml-auto">
            <Link className="nav-link" to="Profile"><img src={`${this.props.user.icon}`} className="profile-pic" alt=""/></Link>
          </li>
        </ul>
      </div> 
  
)

  }
  
}
