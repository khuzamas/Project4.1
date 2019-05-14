import React, { Component } from 'react'
import '../App.css';
import './UserHome.css'
import Carousel from 'react-bootstrap/Carousel'
import ProgressBar from 'react-bootstrap/ProgressBar'
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


export default class UserHome extends Component {
    state= {
        check: false,
        useCanvas: false
    }

    checkHandler= () => {
        console.log(this.state.check);
        this.setState({check: !(this.state.check)})
    }
    
      
    render() {
        const checkShow= this.state.check === false ? " inactive" : " is-active"

        const data = [
            {
              name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
            },
            {
              name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
            },
            {
              name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
            },
            {
              name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
            },
            {
              name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
            },
            {
              name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
            },
            {
              name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
            },
        ];
          
        return (
            <div className="user-home">
                {/* <div className="navbar">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="home">Home</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="home">Programs</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="home">Challenges</a>
                        </li>
                        <li className="nav-item active n-p">
                            <a className="nav-link" href="Profile"><img src="https://img.icons8.com/color/48/000000/anonymous-mask.png" alt=""/></a>
                        </li>
                    </ul>
                </div>  */}

                <div className="body3">
                    {/* <div className="tasks card">
                        <div className="card-header">
                            Daily Tasks
                        </div>
                        <div className="card-body">
                            <td className="td img" onClick={() => this.checkHandler()} ><img src="https://img.icons8.com/cotton/64/000000/checkmark.png" alt="" className={"check"+checkShow}/></td>
                            <td className="td">Mark</td>  
                        </div>
                    </div> */}
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://www.officemax.co.nz/Images/ProductImages/2346419.jpg"
                            alt="First slide"
                            />
                            <Carousel.Caption className="caption">
                                <a href="" className="p-title"><h3>First slide label</h3></a>
                                {/* <Button variant="info">Go to Program</Button> */}
                                <ProgressBar striped variant="info" now={60}  />
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://static1.squarespace.com/static/59d2bea58a02c78793a95114/t/5ade4f0d575d1fc8b989d31f/1524518670701/Screen+Shot+2018-04-23+at+5.23.41+PM.png?format=2500w"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>   
                    </Carousel>

                    <div className="weekly-progress">
                        <div className="topic">
                            <h3>Your Weekly Progress</h3>
                        </div>

                        <div className="chart">
                            <BarChart
                                width={1000}
                                height={300}
                                data={data}
                                margin={{
                                top: 5, bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="pv" fill="#f4d35e" />
                            </BarChart>
                        </div>
                    </div>
                 

                </div>
            </div>
        )
    }
}
