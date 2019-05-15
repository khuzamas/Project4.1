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

  filterProgram = (p_id) =>{
    return this.state.programs.filter(el => el.id === p_id)
  }

  detailsClickHandler= (program) => {
    this.props.history.push('/program')
    // return <Route path='/program' render={(props) => <Program {...props} isAuthed={true} program={program} />}/>
    // return <Redirect to='/program'/>
  }

  render() {
    console.log(this.state.programs);
    
    const program = this.state.programs.map((program,index) =>{
      const redirectShow= this.state.redirect ? 'in-active' : 'active'
        console.log(program)
      return (
        <div key={index}>
          {/* <Route path='/program/:id' render={(props) => <Program {...props} isAuthed={true} program={program} user={this.props.user}/>}/> */}
          <Link to={`/Program/${program._id}`} onClick={()=>this.setRedirect()} className={redirectShow}><h3>{program.name}</h3></Link>
        </div>
      )
    })

    // const program1= this.state.programs[0]
    // console.log(program1);
    // console.log(program1.name);
    // const redirectShow= this.state.redirect ? 'in-active' : 'active'

    return (
      <div>
        <Router>
        <Route path='/program/:id' render={(props) => <Program {...props} isAuthed={true} program={this.state.programs} user={this.props.user}/>}/>
          {/* <Link className="nav-link" to="Program">{program}</Link> */}
          <div>
            {program}
          </div>
        </Router> 
      </div>
    )
  }
}

export default Programs