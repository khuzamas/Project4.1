import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

export default class Program extends Component {
  render() {
    console.log(this.props.program);

    const exercises= this.props.program.exercises.map((exercise, index) => {
      return (
        <div className="index">
            <Card>
              <Card.Body>{exercise}</Card.Body>
            </Card>
        </div>
      )
    })
    
    return (
      <div className='card'>
      <div className="card-body">
        <h2>{this.props.program.name}</h2>
        <p>Desctiption: {this.props.program.description}</p>
        <p>Reward: {this.props.program.reward}</p>
        <p>Included excercises:</p>
        {/* {exercises} */}
        </div>
      </div>
    )
  }
}
