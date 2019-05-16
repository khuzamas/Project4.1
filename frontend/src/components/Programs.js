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
        <div key={index} className="card rounded-0">
        <img class="card-img-top rounded-0" src={program.image} alt="Card image"/>
       
        <div className="card-body">
 
              <Link to={`/Programs/${program._id}`}>
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
          <h2 className="mb-3">All Programs:</h2>
          <div className="row">
            {program}
          </div>
  
      </div>
    )
  }
}

export default Programs