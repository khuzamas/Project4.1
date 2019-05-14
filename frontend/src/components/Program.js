import React, { Component } from 'react'

export default class Program extends Component {
  render() {
    return (
      <div className = 'card'>
      <div className="card-body">
      <div className="card-title text-dark">
      {this.props.program.name}
      </div>
      </div>
      </div>
    )
  }
}
