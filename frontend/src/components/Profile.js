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
import { Link } from 'react-router-dom'

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
      var programName = this.props.user.programs.map((program, index) => {

        return (

          <div className="col-lg-4 col-md-6 col-sm-12  mb-3">
            <div key={index} className="card rounded-0">
              <img className="card-img-top rounded-0" src={program.image} alt="Card image" />

              <div className="card-body">

                <Link to={`/Programs/${program._id}`}>
                  {program.name}
                </Link>
                <p className="card-text">{program.description}</p>

              </div>

            </div>
          </div>

        )
      })

    } else {
      programName = 'No programs'
    }




    return (

      <div className="user-profile  py-5">


        <div className="container ">
        <div className="row p-0 m-0 bg-danger rounded py-3">
          
          <div className="col-4 user-info-item ">
            <div className="currency">

              <h4>My Currency</h4>
              <div className="currency-img">
                <h4 className="currency1">{this.props.user.points}</h4>
              </div>




            </div>
          </div>
          <div className="col-4 user">
          <h3 className="m-0" >{this.props.user.username} </h3>
            <img src={this.props.user.icon} alt=""/>
            {/* <div >
              

              <div className="d-inline-block"><UserInfo userinfo /></div>
            </div>
            <AddStats /> */}


          </div>
          <div className="col-4 user-info-item badges">
            <h4>My Badges</h4>
            <div className="badge">
              <div className="badge-img">
                <h3 className="badge1">3</h3>
              </div>


            </div>
          </div>

          



          </div>
        </div>

        <div className="user-info py-5 ">
          <div className="container">
            <div className="row">
              <div className="col-12-lg pb-4">
                <h4>My Programs: </h4>
                <div className="row">
                  {programName}
                </div>


              </div>



              <div className="col-12  stats">
                <h4 style={{ marginLeft: "135px" }}>My Summary</h4>
                <div className="row">
                <div className="col-6">
                  <LineChart
                    width={400}
                    height={150}
                    data={data}
                    
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                  </LineChart>
                </div>
                <div className="col-6">
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
      </div>
    )
  }
}

export default Profile
