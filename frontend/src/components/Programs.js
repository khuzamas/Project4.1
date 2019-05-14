import React, { Component } from 'react'
import Program from './Program';
import axios from 'axios'
import {
  BrowserRouter as Router, Route, Link, Redirect
} from 'react-router-dom'
import './Programs.css'
import Card from 'react-bootstrap/Card'

class Programs extends Component {
  state = {
    programs: [],
    page: 'programs',
    redirect: false
  }

  componentDidMount(){
    axios.get('/api/programs')
    .then(res => {
      this.setState({programs: res.data})
    })
    .catch(err => console.log(err))
  }

  setRedirect= () => {
    this.setState({
      page: 'program',
      redirect: true
    })
  }

  detailsClickHandler= (e,program) => {
console.log(e);

  }

  render() {
    // console.log(this.state.programs);
    
    const program = this.state.programs.map((program,index) =>{
      const redirectShow= this.state.redirect ? 'in-active' : 'active'
      // const pageShow= this.state.page==='programs' ? 'active' : 'in-active'
      
      return (
        <div className='card col-3 mt-3'>
        <img className="card-img-top" src={program.image} alt=''/>
      <div className="card-body">

        <div key={index}>
        
          <Route path='/program' render={(props) => <Program {...props} program={program}/>}/>
          <Link to="Program" className='card-title'>{program.name}</Link>
        </div>
        </div>
        </div>
        
      )
    })


    return (
      <div className="container">
        <Router>
          {/* <Link className="nav-link" to="Program">{program}</Link> */}
          <div className='row'>
            {program}
          </div>
        </Router> 
      </div>
    )
  }
}

export default Programs
