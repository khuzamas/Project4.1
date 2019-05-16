import React, { Component } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'


export default class Navbar extends Component {
  render() {
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
          
          </ul>
          
        <ul className="navbar-nav  ml-auto">
          <li>
            <img src="https://img.icons8.com/color/48/000000/expensive-2.png" className="nav-link"/>
          </li> 
          <li className="nav-item ml-auto">
            <Link className="nav-link" to="Profile"><img src={`${this.props.user.icon}`} alt=""/></Link>
          </li>
        </ul>
      </div> 
  
)

  }
  
}
