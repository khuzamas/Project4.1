import React, { Component } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import { log } from 'util';


export default class Navbar extends Component {
  render() {
    console.log(this.props);
    
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
