import React, { Component } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'



export default class Navbar extends Component {
  render() {

    const logout = (this.props.isAuthenticated) ? <Link to="/login" className="nav-link" onClick={this.props.logout}>Logout</Link> : null

    const login = (!this.props.isAuthenticated) ? <li className="nav-item active">
      <Link className="nav-link" to="/Login">Login</Link>

    </li>
      : null

const signup = (!this.props.isAuthenticated) ? 
<li className="nav-item active">
  <Link className="nav-link" to="/Signup">Signup</Link>
</li> : null



    return (


      <div className="navbar ">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/UserHome">Home</Link>

          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/Programs">Programs</Link>

          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/Challenges">Challenges</Link>

          </li>

          <li className="nav-item active">
            <Link className="nav-link" to="/Store">Store</Link>

          </li>
          {login}
          {signup}
          <li className="nav-item active">
            {logout}

          </li>


        <div className="navbar ">
          <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/UserHome">Home</Link>
            
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/Programs">Programs</Link>
               
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/Challenges">Challenges</Link>
                
              </li>
      
            <li className="nav-item active">
              <Link className="nav-link" to="Store">Store</Link>
              {/* <a className="nav-link" href="home">Challenges</a> */}
            </li>
          
          </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link username" to="/Profile">{this.props.user.username}</Link>
            {/* <a className="nav-link" href="home">Home</a> */}
          </li>
          <li className="nav-item ml-auto">
            <Link className="nav-link" to="/Profile"><img src={`${this.props.user.icon}`} className="profile-pic" alt=""/></Link>

          </li>
        </ul>
      </div>

    )

  }

}
