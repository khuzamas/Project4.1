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

  detailsClickHandler= (program) => {
    this.props.history.push('/program')
    // return <Route path='/program' render={(props) => <Program {...props} isAuthed={true} program={program} />}/>
    // return <Redirect to='/program'/>
  }

  render() {
    // console.log(this.state.programs);
    
    const program = this.state.programs.map((program,index) =>{
      const redirectShow= this.state.redirect ? 'in-active' : 'active'
      // const pageShow= this.state.page==='programs' ? 'active' : 'in-active'
      
      return (
        <div key={index}>
        {/* <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://img.icons8.com/color/96/000000/dumbbell.png" />
          <Card.Body>
            <Route path='/program' render={(props) => <Program {...props} isAuthed={true} program={program}/>}/>
            <Link to="Program" onClick={()=>this.setRedirect()} className={redirectShow}><h3>{program.name}</h3></Link>
          </Card.Body>
        </Card> */}
        
          <Route path='/program' render={(props) => <Program {...props} isAuthed={true} program={program}/>}/>
          <Link to="Program" onClick={()=>this.setRedirect()} className={redirectShow}><h3>{program.name}</h3></Link>
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
