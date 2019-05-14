import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input,Col, Form, FormGroup, Label  } from 'reactstrap';

class AddChallenge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
       <i class="fas fa-plus-square"  style={{cursor: "pointer"}}onClick={this.toggle}>{this.props.buttonLabel}  </i>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add New Challenge</ModalHeader>
          <ModalBody>

          <Form>
        <FormGroup row>
          <Label for="exampleEmail" sm={4} size="sm">Challenge Name</Label>
          <Col sm={10}>
            <Input  name="ChallengeName" id="exampleEmail" onChange={this.props.change} placeholder="Running Challenge" bsSize="sm" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={4} size="sm">Description</Label>
          <Col sm={10}>
            <Input  name="ChallengeName" id="exampleEmail" onChange={this.props.change}  placeholder="Running Challenge" bsSize="sm" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={4} size="sm">Reward</Label>
          <Col sm={10}>
            <Input  name="ChallengeName" id="exampleEmail"  onChange={this.props.change}  placeholder="59" bsSize="sm" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={4} size="sm">Category</Label>
          <Col sm={10}>
            <Input  name="ChallengeName" id="exampleEmail" onChange={this.props.change}  placeholder="Endurance" bsSize="sm" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={4} size="sm"> Level</Label>
          <Col sm={10}>
            <Input  name="ChallengeName" id="exampleEmail" onChange={this.props.change}  placeholder="Expert" bsSize="sm" />
          </Col>
        </FormGroup>
        
       
      </Form>
          </ModalBody>
          <ModalFooter>
          <Button onClick={this.props.add} block>Add Game</Button>{' '}
            {/* <Button color="secondary" onClick={this.toggle}>Cancel</Button> */}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddChallenge;