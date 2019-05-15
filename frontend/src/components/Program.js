import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import axios from 'axios';

export default class Program extends Component {
  
  state= {
    user: this.props.user,
    userPrograms: this.props.user.programs,
    program : this.props.program
  }
  
  filterProgram = (p_id) =>{
    let filtered = this.props.program.filter(el => el._id === p_id)
    // console.log("filter",filtered)
    let data = {...this.state}
    data.program = filtered[0]
    this.setState(data)
  }

  startProgramClick= () => {
    console.log('clicked');

    this.setState({userPrograms: this.state.user.programs.push(this.state.program._id)})
    

    axios.put(`http://localhost:4000/api/users/${this.state.user._id}`, {programs: this.state.userPrograms})
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(err))
  }

  finishProgramClick= () => {
    console.log('finish clicked');

    var index;

    this.state.user.programs.forEach((program, indexof) => {
      if (program===this.state.program._id) {
        index= indexof
      }
    })

    this.state.user.programs.splice(index, 1);
    const points= this.state.user.points + parseInt(this.state.program.reward)
    
    axios.put(`http://localhost:4000/api/users/${this.state.user._id}`, {programs: this.state.user.programs, points: points})
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(err))
  }

  componentDidMount(){
    this.filterProgram(this.props.match.params.id)
  }

  render() {

    const exercises= this.props.program[0].exercises.map((exercise, index) => {
      const style= {
        display: "inline-block"
      }
      return (
        <div className="index">
            <Card className="card" style={style}>
              <Card.Img variant="top" src={exercise.image} className="exercise-img"/>
              <Card.Body>
                <Card.Title>{exercise.name}</Card.Title>
                <Card.Text>
                  sets: {exercise.sets}, repetition: {exercise.repetition}
                </Card.Text>
              </Card.Body>
            </Card>
        </div>
      )
    })
    
    return (
      <div>
        <h2>{this.state.program.name}</h2>
        <button className="btn btn-info" onClick={() => this.startProgramClick()}>Start This Program</button>
        <button className="btn btn-info" onClick={() => this.finishProgramClick()}>Finished This Program</button>
        <p>Description: {this.state.program.description}</p>
        <p>Reward: {this.state.program.reward}</p>
        <p>Included excercises:</p>
        {exercises}
      </div>
    )
  }
}