import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from "axios";

class UserInfo extends React.Component {
  state = {
    userInfo: {},
      modal: false
    };

   stat=()=>{
    console.log("WHAT");
     console.log(this.state);
     console.log("WHAT");
   }
  componentDidMount() {
      axios.get('/api/users/')
      .then(res => {console.log(res)
          this.setState({
              userInfo: res.data,
              
              
          })
          console.log(this.state);
      })
      .catch(err =>{console.log(err);
      })
}

    toggle = this.toggle.bind(this);
  

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
      
    }));
  }

  render() {
    return (
      <div>
        <i className="fas fa-caret-down" onClick={this.stat} style={{cursor: "pointer", fontSize: "20px"}}>
        
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
         
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        </i>
      </div>
    );
  }
}

export default UserInfo;