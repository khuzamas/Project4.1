import React, { Component } from 'react'
import Program from './Program';
import axios from 'axios'
import {Link} from 'react-router-dom'
import './Programs.css'

class Programs extends Component {
  state = {
    programs: [],
    page: 'programs',
    redirect: false
  }

  componentDidMount() {
    axios.get('/api/programs')
      .then(res => {
        this.setState({ programs: res.data })
      })
      .catch(err => console.log(err))
  }




  render() {

    const program = this.state.programs.map((program, index) => {

      return (
        
        <div className="col-lg-4 col-md-6 col-sm-12  mb-3">
        <div key={index} className="card ">
        <img class="card-img-top" src={program.image} alt="Card image"/>
       
        <div className="card-body">
 
              <Link to={`/Programs/${program._id}`} currentPath='/programs' >
              {program.name}
              </Link>
              <p class="card-text">{program.description}</p>
              </div>
              
              </div>
        </div>
        
      )
    })



    return (
      <div className='container mt-5'>
          <div className="row">
            {program}
          </div>
  
      </div>
    )
  }
}

export default Programs