import React, {Component} from 'react';
import {
  BrowserRouter as Router, Route, Link, Redirect
} from 'react-router-dom'
import axios from 'axios'
import { getToken, setToken, logout} from './services/auth'
import jwt_decode from 'jwt-decode'
import Login from './components/Login';
import Signup from './components/Signup';
import UserHome from './components/UserHome';
import Home from './components/Home';
import Programs from './components/Programs';
import Exercises from './components/Exercises';
import Profile from './components/Profile';
import Navbar from './components/Layouts/Navbar'
import {Container, Row, Button, Col, Alert} from 'reactstrap';
import ShowGame from './components/ShowGame';
import AddGame from './components/AddGame';
import Challenges from './components/Challenges';

/*------
  Since JWT requires token to be passed in header
  Save an object for header so I dont have to repeat this code
----*/
let header = {
  headers :{
    "Content-Type" : "application/json",
    "Authorization" : `Bearer ${getToken()}`
  }
}

class App extends Component {

  state = {
    games : [],
    user : "",
    errorMsg : '',
    isAuthenticated : false,
    hasError : false,
    
  }


  componentDidMount() {
    if(getToken()){
      let decode = jwt_decode(getToken())
      let data = {...this.state}
      
      axios.get(`/api/user/${decode._id}`)
      .then(res => {
        console.log("axx",res.data);
        
        data.user = res.data
        data.isAuthenticated = true
        this.setState(data)
      })
      
      // this.setState(data)
      console.log("decoded: ",decode)
    }else{
      return <Redirect to='/login' />
    }
  }

  changeHandler = (e) => {
    //Log every key value and save to state from form
    let data = {...this.state}
    data[e.target.name] = e.target.value

    this.setState(data)
  }

  getGames = () =>{
    //get data from JWT locked route
    // Passed header variable with token in headers
    axios.get('/api/games', header)
    .then(response => {
      console.log(response.data)
      if(response.data.games.length > 0){
        
        let data = {...this.state}
        data.games = response.data.games

        this.setState(data)
      }
    })
    .catch()
  }

  submitHandler = (e) => {   
    axios.post('/api/games',{ name : this.state.gamename}, header)
      .then( response => {
        
          let data = {...this.state}
          data.games.push(response.data.game)

          this.setState(data)
      })
      .catch()
  }

  loginHandler = (e) => {
    axios.post('/api/auth/login',{ email: this.state.email, password: this.state.password})
    .then( response => {
      console.log(response.data)
      if(response.data.token){
        setToken(response.data.token)

        let data = {...this.state}
        data.user = response.data.user
        data.isAuthenticated = true
        data.hasError = false

        this.setState(data)

        this.getGames()
      }
      
    })
    .catch(err =>{
      let data = {...this.state}
        data.hasError = true
        this.setState(data)

    })
  }

  logout = () =>{
    logout()
    let data = {...this.state}
    //reset everything on logout
    data.isAuthenticated = false
    data.user = ""
    data.email = ""
    data.password = ""
    data.games = []

    this.setState(data)

  }


  registerHandler = (e) => {
    e.preventDefault();
    console.log("got here")
    axios.post('/api/auth/register',{ username: this.state.email,email: this.state.email, password: this.state.password})
    .then( response => {
      console.log("hello",response)
      // if(response.data.token){
      //   setToken(response.data.token)

      //   let data = {...this.state}
      //   data.user = response.data.user
      //   data.isAuthenticated = true
      //   data.hasError = false

      //   this.setState(data)

      // }
      
    })
    .catch(err => console.log(err))
  }

  displayGames = ()=>{
    
    return this.state.games.map(game => 
      <li key={game._id} id={game._id}>{game.name}</li>
      )
  }




  
  render(){
    //if not logged in show login page
    // const showLogin = (!this.state.isAuthenticated) ? <Login change={this.changeHandler} login={this.loginHandler} /> : null
      // show logout button
    const Logout = (this.state.isAuthenticated) ? <Link to="/"><Button onClick={this.logout}>Logout</Button></Link> : null
     //show games when logged in
    const GameView = (this.state.isAuthenticated) ? <Row>
      <Col md={6}>
        <ShowGame games={this.state.games} />
      </Col>

      <Col md={6}>
        <AddGame add={this.submitHandler} change={this.changeHandler} />
      </Col>
      
    </Row> : null

    console.log(this.state)
    
    return (
      <Router>
        <Navbar/>
        <Route path="/" exact render={(props => (!this.state.isAuthenticated) ? <Login change={this.changeHandler} login={this.loginHandler} {...props} /> : <Redirect to="/UserHome"/> )} />
        <Route path='/index' component={Home}/>
        <Route path='/userhome' render={(props) => <UserHome {...props} user={this.state.user}/>}/>
        <Route path='/profile' render={(props) => <Profile {...props} user={this.state.user}/>} />
        <Route path='/programs' render={(props) =>  <Programs {...props} user={this.state.user}/> }/>
        <Route path='/exercises' component={Exercises}/>
        <Route path='/challenges' component={Challenges}/>
        <Route path='/login' render={(props) => <Login {...props} change={this.changeHandler} login={this.loginHandler}/>}
        />
        <Route path='/signup' render={(props) => <Signup {...props} change={this.changeHandler} register={this.registerHandler}/>}
        />
        {/* <Container>
          <Alert color="danger" isOpen={this.state.hasError} toggle={this.onDismiss} fade={false}>{this.state.errorMsg}</Alert>
          
          Username: {this.state.user.username}
          {Logout}
        
          {showLogin}
          {GameView}
        </Container> */}
      </Router>
    );
  }
}

export default App;
