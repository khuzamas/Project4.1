import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'


function Navbar() {
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
          
          </ul>
          <ul className="navbar-nav">
            <li>
              <img src="https://img.icons8.com/color/48/000000/expensive-2.png" className="nav-link"/>
            </li>
            <li className="nav-item ml-auto">
              <Link className="nav-link" to="/Profile"><img src="https://img.icons8.com/color/48/000000/anonymous-mask.png" alt=""/></Link>
            </li>
          </ul>
        </div> 
    
  )
}

export default Navbar
