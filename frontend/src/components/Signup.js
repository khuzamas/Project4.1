import React from 'react'

const Signup = (props) => {
    return (
      <div className="mt-5 row ">
        <div className="card mx-auto">
         <form className="card-body" >
         <div className="row mb-3">
        
        <div className="col">
        <label htmlFor="exampleInputEmail1">Username</label>
          <input type="text" name='username'  onChange={props.change} className="form-control" placeholder="Username" />
        </div>
    
      </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" name='email'  onChange={props.change} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" name='password'  onChange={props.change} className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div>
        {/* <div className="well"> 
          <div className="form-group">
            <label>Date of Birth</label>
            <input type="date"  name='dateofbirth' value='dateofbirth' className="form-control" id="exampleInputDOB1" placeholder="Date of Birth" />
          </div>
        </div> */}
        <div className="well"> 
        </div>
      </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button  className="btn btn-primary" onClick={props.register}>Sign Up</button>
      </form>
      </div>
      </div>
        
    
    )
  }


export default Signup
