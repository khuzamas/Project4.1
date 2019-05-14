import React, { Component } from 'react'
import Program from './Program';
import axios from 'axios'

class Programs extends Component {
    state = {
        programs: []
    }
    componentDidMount(){
        axios.get('/api/programs')
        .then(res => this.setState({programs: res.data}))
        .catch(err => console.log(err))
    }
  render() {
      const program = this.state.programs.map((program,index) =>{
        return (
              <Program program={program}/>
          )

      })
    return (<div>
      {program}
      </div>
    )
  }
}

export default Programs
