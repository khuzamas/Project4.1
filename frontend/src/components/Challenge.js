import React, { Component } from 'react'

export default class Challenge extends Component {
  render() {
      console.log(this.props)
    return (
      <div>
       
      <div className = 'card'>
      <div className="card-body">
      <div className="card-title text-dark">
      {this.props.challenge.name}
      </div>
      </div>
      </div>
    
      </div>
    )
  }
}
