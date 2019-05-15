import React, { Component } from 'react'

export default class Exercise extends Component {
  render() {
    return (
      
 
      <tr>
        <th scope="col">{this.props.exercise.name}</th>
        <th scope="col">{this.props.exercise.sets}</th>
        <th scope="col">{this.props.exercise.repetition}</th>
        <th scope="col">Image here</th>
      </tr>

    )
  }
}
