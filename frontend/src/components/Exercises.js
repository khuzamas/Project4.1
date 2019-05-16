import React, { Component } from 'react'
import Exercise from './Exercise';

export default class Exercises extends Component {
  state = {
    exercise: this.props.exercise
  }

  componentDidMount(){
    this.setState({
      exercise: this.props.exercise
    })
  }
  render() {
    console.log(this.props);
    if(this.props.exercises){
    var exercise = this.props.exercises.map((exercise, index) => {
      return <Exercise exercise = {exercise}/>
    })
    }else{
      var exercise = <h1>No Exercises</h1>
    }
    
    return (
      <table class="table table-striped mb-5">
      <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">#Sets</th>
        <th scope="col">#Repetition</th>
        <th scope="col">image</th>
      </tr>
    </thead>
    <tbody>
       {exercise}
       </tbody>
       </table>
    )
  }
}
