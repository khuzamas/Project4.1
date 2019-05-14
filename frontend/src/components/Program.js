import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import axios from 'axios';

export default class Program extends Component {
  
  state= {
    user: this.props.user,
    userPrograms: this.props.user.programs
  }
  
  startProgramClick= () => {
    console.log('clicked');
    
    this.setState({userPrograms: this.state.user.programs.push(this.props.program)})
    console.log(this.props.user);

    axios.patch(`api/users/${this.state.user._id}`, {programs: this.state.userPrograms})
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(err))
  }

  render() {
    console.log('program');
    // console.log(this.props.user);
    // console.log(this.props.program);

    const exercises= this.props.program.exercises.map((exercise, index) => {
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
        <h2>{this.props.program.name}</h2>
        <button className="btn btn-info" onClick={() => this.startProgramClick()}>Start This Program</button>
        <button></button>
        <p>Description: {this.props.program.description}</p>
        <p>Reward: {this.props.program.reward}</p>
        <p>Included excercises:</p>
        {exercises}
      </div>
    )
  }
}
