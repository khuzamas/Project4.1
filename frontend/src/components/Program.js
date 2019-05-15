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
    console.log("filter",filtered)
    let data = {...this.state}
    data.program = filtered[0]
    this.setState(data)
  }

  startProgramClick= () => {
    console.log('clicked');
    // console.log('user');
    // console.log(this.state.user);
    console.log(this.state.program._id)
    this.setState({userPrograms: this.state.user.programs.push(this.state.program._id)})
    
    // alert(this.state.user._id)

    axios.put(`http://localhost:4000/api/users/${this.state.user._id}`, {programs: this.state.userPrograms})
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err))
  }

  finishProgramClick= () => {
    console.log('finish clicked');
    this.setState({})
  }

  componentDidMount(){
    // console.log(this.props.user.programs)
    // console.log(this.props.programs)
    this.filterProgram(this.props.match.params.id)
  }

  render() {
    // console.log('program');
    // console.log("pro",this.props.program)
    // console.log("user program",this.props.user.programs)
    console.log("user",this.props.user);
    // console.log("params id", this.props.match.params.id);

    // const exercises= this.props.program.exercises.map((exercise, index) => {
    //   const style= {
    //     display: "inline-block"
    //   }
    //   return (
    //     <div className="index">
    //         <Card className="card" style={style}>
    //           <Card.Img variant="top" src={exercise.image} className="exercise-img"/>
    //           <Card.Body>
    //             <Card.Title>{exercise.name}</Card.Title>
    //             <Card.Text>
    //               sets: {exercise.sets}, repetition: {exercise.repetition}
    //             </Card.Text>
    //           </Card.Body>
    //         </Card>
    //     </div>
    //   )
    // })
    
    return (
      <div>
        <h2>{this.state.program.name}</h2>
        <button className="btn btn-info" onClick={() => this.startProgramClick()}>Start This Program</button>
        <button className="btn btn-info">Finished This Program</button>
        <p>Description: {this.state.program.description}</p>
        <p>Reward: {this.state.program.reward}</p>
        <p>Included excercises:</p>
        {/* {exercises} */}
      </div>
    )
  }
}