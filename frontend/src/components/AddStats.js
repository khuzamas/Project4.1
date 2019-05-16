import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input,Col, Form, FormGroup, Label  } from 'reactstrap';
import axios from "axios";


class AddStats extends React.Component {
 
    state = {
    name: "",
    description:"",
    reward:"",
    level:"",
    category:"",
    modal: false
    };

    toggle = this.toggle.bind(this);


  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  changeHandler = (e) => {
    //Log every key value and save to state from form
    console.log(e.target.value);
    
    let data = {...this.state}
    data[e.target.name] = e.target.value

    this.setState(data)
  }
 
  submitHandler = (e) => {  
    e.preventDefault()
    
    let chall =  { name: this.state.name,
    description: this.state.description,
    reward: this.state.reward,
    category: this.state.category,
    level: this.state.level,
    }
    console.log(chall);
    
    axios.post('/api/challenges',chall)
      .then( response => {
        console.log("worked");
        
          // let data = {...this.state}
          // data.games.push(response.data.game)

          // this.setState(data)
      })
      .catch()
  }
  render() {
      
    return (
      <div>
       <i className="fas fa-plus-square"  style={{cursor: "pointer"}}onClick={this.toggle}>{this.props.buttonLabel}  </i>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add New Challenge</ModalHeader>
          <ModalBody>

          <form method="Post" action="/challenges">
        <FormGroup row>
          <Label for="exampleEmail" sm={4} size="sm">Challenge Name</Label>
          <Col sm={10}>
            <Input  name="name" id="exampleEmail" onChange={this.changeHandler} placeholder="Running Challenge" bsSize="sm" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={4} size="sm">Description</Label>
          <Col sm={10}>
            <Input  name="description" id="exampleEmail" onChange={this.changeHandler}  placeholder="Running Challenge" bsSize="sm" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={4} size="sm">Reward</Label>
          <Col sm={10}>
            <Input  name="reward" id="exampleEmail"  onChange={this.changeHandler}  placeholder="59" bsSize="sm" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={4} size="sm">Category</Label>
          <Col sm={10}>
            <Input  name="category" id="exampleEmail" onChange={this.changeHandler}  placeholder="Endurance" bsSize="sm" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={4} size="sm"> Level</Label>
          <Col sm={10}>
            <Input  name="level" id="exampleEmail" onChange={this.changeHandler}  placeholder="Expert" bsSize="sm" />
          </Col>
        </FormGroup>
      </form>
          </ModalBody>
          <ModalFooter>
          <Button onClick={this.submitHandler} type="submit" block>Add Game</Button>{' '}
            {/* <Button color="secondary" onClick={this.toggle}>Cancel</Button> */}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddStats;