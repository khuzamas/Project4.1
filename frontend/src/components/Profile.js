import React, { Component } from 'react'
import './Profile.css'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import {
  PieChart, Pie,
} from 'recharts';
import AddStats from './AddStats';
import UserInfo from './UserInfo';

export class Profile extends Component {
  

  render() {
    const data = [
      {
        name: 'Mon', uv: 4000, pv: 2400, amt: 2400,
      },
      {
        name: 'Tue', uv: 3000, pv: 1398, amt: 2210,
      },
      {
        name: 'Wed', uv: 2000, pv: 9800, amt: 2290,
      },
      {
        name: 'Thu', uv: 2780, pv: 3908, amt: 2000,
      },
      {
        name: 'Fri', uv: 1890, pv: 4800, amt: 2181,
      },
      {
        name: 'Sat', uv: 2390, pv: 3800, amt: 2500,
      }, {
        name: 'Sun', uv: 2390, pv: 3800, amt: 2500,
      },
    ];

    const data01 = [
      { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
      { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
      { name: 'Group E', value: 278 }, { name: 'Group F', value: 189 },
    ];

    if (this.props.user.programs) {
    var programName = this.props.user.programs.map(program => {
      return ( 
        <div><div className="program">
        <div className="program-img">
          <img src="https://img.icons8.com/cotton/96/000000/trainers.png" alt=""/>
        </div>
        <div className="program-name">
          <h3>{program.name}</h3>
        </div>
      </div></div>
      )
    })
  }else{
     programName = 'No programs'
  }

    
    
        
    return (
      
      <div className="user-profile  ">
      
   
 
        <div className="user">

          <img src="https://img.icons8.com/color/48/000000/anonymous-mask.png" alt=""/>
          <div >
          <h3 className="d-inline-block" > {this.props.user.username} </h3>
          
          <div className="d-inline-block"><UserInfo userinfo/></div>
          </div>
          <AddStats/>
          

        </div>

        <div className="row user-info">
        <div className="container">
  <div class="row">
          <div className="col-lg user-info-item badges">
            <h4>BADGES</h4>
            <div className="badge">
              <div className="badge-img">
                <h3 className="badge1">3</h3>
              </div>
              
              
            </div>
            <h4 style={{marginTop: "30px"}}>CURRENCY</h4>
            <div className="currency">
              <div className="currency-img">
                <h3 className="currency1">{this.props.user.points}</h3>
              </div>
              
              
            </div>
           
        
          </div>
          <div className="col-lg user-info-item programs">
            <h4>PROGRAMS</h4>
            {programName}
            
        
          </div>
          <div className="col-sm user-info-item stats">
            <h4 style={{marginLeft: "135px"}}>STATISTICS</h4>
            <div className="weight-chart">
              <LineChart
                width={400}
                height={150}
                data={data}
                margin={{
                  top: 5, right: 10, left: 10, bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </div>
            <div className="pie-chart">
              <PieChart width={400} height={350}>
                <Pie dataKey="value" isAnimationActive={false} data={data01} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
                <Tooltip />
              </PieChart>
            </div>
          </div>
        </div>
      </div>
      </div>
</div>
    )
  }
}

export default Profile
