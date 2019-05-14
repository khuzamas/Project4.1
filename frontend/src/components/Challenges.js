import React, { Component } from 'react'
import axios from "axios";
import Challenge from './Challenge';
import AddChallenge from './AddChallenge';

export class Challenges extends Component {
    state ={

        challenges: [],
    }
    componentDidMount() {
        axios.get('/api/challenges/')
        .then(res => {console.log(res)
            this.setState({
                challenges: res.data,
                
            })
            // console.log(this.state.challenges[0].name);
        })
        .catch(err =>{console.log(err);
        })
}

render() {
    

    const challenge = this.state.challenges.map((challenge,index) =>{
        return (
            // <div> {this.state.challenges[0].name}</div>
              <Challenge challenge={challenge}/>
          )

      })
    return (<div>
      {challenge}

        <AddChallenge/>
    
      </div>
    )
  }
}


export default Challenges


