import React, { Component } from 'react'
import { Fragment } from 'react'
import Header from './Layouts/Header';
import '../App.css';
import './UserHome.css'
import Carousel from 'react-bootstrap/Carousel'
import ProgressBar from 'react-bootstrap/ProgressBar'
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import {Link} from 'react-router-dom'

// ==


export default class UserHome extends Component {
    state = {
        check: false,
        user: this.props.user,
        programs: this.props.programs
    }




    render() {

        const data = [
            {
                name: 'Saturday', points: 2400,
            },
            {
                name: 'Sunday', points: 1398,
            },
            {
                name: 'Monday', points: 9800,
            },
            {
                name: 'Tuesday', points: 3908,
            },
            {
                name: 'Wednesday', points: 4800,
            },
            {
                name: 'Thursday', points: 3800,
            },
            {
                name: 'Friday', points: 4300,
            },
        ];

        console.log('home user');
        console.log(this.props.programs);
        console.log('home state user');
        // console.log(this.state.programs);
        var userProgramss;

        if (this.props.programs) {
            userProgramss = this.props.programs.map((program, index) => {
                var style = {
                    height: '20px',
                    fontSize: '18px'
                }
                return (
                    <Carousel.Item>
                        <img
                            className="d-block w-100"

                            src={program.image}
                            alt="First slide"
                        />
                        <Carousel.Caption className="caption">
                            <a href={`http://localhost:3000/Program/${program._id}`} className="p-title" program={program}><h3>{program.name}</h3></a>
                            <ProgressBar striped variant="warning" animated now={60} label={'In Progress'} style={style} />
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })
        }

        // const show= this.state.noneShow===false? 'active' : 'in-active'

        return (
            <div className="user-home">

                <div className="body3">
                    <div className="container pt-4">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"

                                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVAAAACWCAMAAAC/8CD2AAAAA1BMVEUhLUDIAwpyAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF8GxXYAARizDlgAAAAASUVORK5CYII='
                                    alt="First slide"
                                />
                                <Carousel.Caption className="caption">
                                    <a href="" className="p-title"><h3>Start a Program To See It Here</h3></a>
                                </Carousel.Caption>
                            </Carousel.Item>
                            {userProgramss}
                        </Carousel>
                    </div>

                    <div className="container my-4">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12  mb-3">
                                <div className="card rounded-0">
                                    <img className="card-img-top rounded-0" src="https://serving.photos.photobox.com/102459880e1fe78e9e69c46f300fa2af4d5515fdcb95b059e932606fe98303e4900abc1c.jpg" alt="Card image" />

                                    <div className="card-body">

                                        <Link to={`/Programs`}>
                                            Programs
                                        </Link>
                                        <p className="card-text text-dark">Check All Programs</p>

                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12  mb-3">
                                <div className="card rounded-0">
                                    <img className="card-img-top rounded-0" src="https://i.imgur.com/Qncr20w.jpg" alt="Card image" />

                                    <div className="card-body">

                                        <Link to={`/Store`}>
                                            Store
                                        </Link>
                                        <p className="card-text text-dark">Check All Programs</p>

                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12  mb-3">
                                <div className="card rounded-0">
                                    <img className="card-img-top rounded-0" src="https://i.imgur.com/BEU9VI8.jpg" alt="Card image" />

                                    <div className="card-body">

                                        <Link to={`/Challenges`}>
                                            Challenges
                                        </Link>
                                        <p className="card-text text-dark">Check All Programs</p>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

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
                                <Bar dataKey="points" fill="#f4d35e" />
                            </BarChart>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
