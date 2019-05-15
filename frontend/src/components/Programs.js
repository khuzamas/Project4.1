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

  componentDidMount() {
    axios.get('/api/programs')
      .then(res => {
        this.setState({ programs: res.data })
      })
      .catch(err => console.log(err))
  }

  setRedirect = () => {
    this.setState({
      page: 'program',
      redirect: true
    })
  }

  filterProgram = (p_id) => {
    return this.state.programs.filter(el => el.id === p_id)
  }


  render() {

    const program = this.state.programs.map((program, index) => {
      const redirectShow = this.state.redirect ? 'in-active' : 'active'

      return (
        
        <div className="col-lg-4 col-md-6 col-sm-12  mb-3">
        <div key={index} className="card ">
        <img class="card-img-top" src={program.image} alt="Card image"/>
       
        <div className="card-body">
              <Link to={`/Program/${program._id}`} onClick={() => this.setRedirect()} className={redirectShow}  >
                <h6 className="card-title">{program.name}</h6>
              </Link>
              <p class="card-text">{program.description}</p>
              </div>
              
              </div>
        </div>
        
      )
    })



    return (
      <div className='container mt-5'>
        <Router>
          <Route path='/program/:id' render={(props) => <Program {...props} program={this.state.programs} user={this.props.user} />} />

          <div className="row">
            {program}
          </div>
        </Router>
      </div>
    )
  }
}

export default Programs