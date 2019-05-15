import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input,Col, Form, FormGroup, Label  } from 'reactstrap';
import axios from "axios";


class AddChallenge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    name: "",
    description:"",
    reward:"",
    level:"",
    category:"",
    modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
 
  submitHandler = (e) => {   
    axios.post('/api/challenges',{ name : this.state.gamename})
      .then( response => {
        
          let data = {...this.state}
          data.games.push(response.data.game)

          this.setState(data)
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
            <Input  name="ChallengeName" id="exampleEmail" onChange={this.props.name} placeholder="Running Challenge" bsSize="sm" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={4} size="sm">Description</Label>
          <Col sm={10}>
            <Input  name="ChallengeDescription" id="exampleEmail" onChange={this.props.description}  placeholder="Running Challenge" bsSize="sm" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={4} size="sm">Reward</Label>
          <Col sm={10}>
            <Input  name="ChallengeReward" id="exampleEmail"  onChange={this.props.reward}  placeholder="59" bsSize="sm" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={4} size="sm">Category</Label>
          <Col sm={10}>
            <Input  name="ChallengeCategory" id="exampleEmail" onChange={this.props.category}  placeholder="Endurance" bsSize="sm" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={4} size="sm"> Level</Label>
          <Col sm={10}>
            <Input  name="Challengelevel" id="exampleEmail" onChange={this.props.level}  placeholder="Expert" bsSize="sm" />
          </Col>
        </FormGroup>
        
       
      </form>
          </ModalBody>
          <ModalFooter>
          <Button onClick={this.OnclickHandler} type="submit" block>Add Game</Button>{' '}
            {/* <Button color="secondary" onClick={this.toggle}>Cancel</Button> */}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddChallenge;