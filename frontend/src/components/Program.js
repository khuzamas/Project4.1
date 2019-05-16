import React, { Component } from 'react'
import axios from 'axios';
import Exercises from './Exercises'

export default class Program extends Component {

  state = {
    user: this.props.user,
    userPrograms: this.props.user.programs,
    program: ''
  }



  startProgramClick = () => {
    console.log('clicked');

    this.setState({ userPrograms: this.state.user.programs.push(this.state.program._id) })


    axios.put(`http://localhost:4000/api/users/${this.state.user._id}`, { programs: this.state.userPrograms })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err))
  }

  finishProgramClick = () => {
    console.log('finish clicked');

    var index;

    this.state.user.programs.forEach((program, indexof) => {
      if (program === this.state.program._id) {
        index = indexof
      }
    })

    this.state.user.programs.splice(index, 1);

    console.log(this.props.user.points);
    
    const points= this.state.user.points + parseInt(this.state.program.reward)
    
    axios.put(`http://localhost:4000/api/users/${this.state.user._id}`, {programs: this.state.user.programs, points: points})
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(err))

  }

  componentDidMount(match) {
    
    axios.get(`/api/programs/${this.props.match.params.id}`)
      .then(res => {
        console.log("yuyuyuyu",res.data);
        
        this.setState({program: res.data})
      })
    
  }

  render() {


    return (
      <div className='container mt-5'>
        <div className="row mb-4">
          <div className=" col-lg-6 col-sm-12">
          <img class="card-img rounded-0" src={this.state.program.image} alt="Card image"/>
            <div className="card-img-overlay "><h2 className="text-light shadow  font-weight-bold">{this.state.program.name}</h2></div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <h5>Description:</h5> <p>{this.state.program.description}</p>
            <h5>Reward:</h5> <p>{this.state.program.reward}</p>
            <button className="btn btn-info mr-2" onClick={() => this.startProgramClick()}>Start This Program</button>
            <button className="btn btn-info" onClick={() => this.finishProgramClick()}>Finished This Program</button>
          </div>
        </div>
        <h3>Exercises:</h3>
        <Exercises exercises={this.state.program.exercises} />
      </div>
    )
  }
}