import React, { Component } from 'react'
import {Row, CardText,CardTitle,CardImgOverlay,Card,Button,CardImg, Modal, ModalHeader, ModalBody, ModalFooter, Input,Col, Form, FormGroup, Label  } from 'reactstrap';

export default class Challenge extends Component {
  render() {

    return (
     
        <div className="center">
        
        <Col  key={this.props.challenge._id}>
          
            <Card inverse style={{ margin: "15px 7px", float: "none" }}>
              <CardImg
                width="70%"
                height="200px"
                src={"data:image/jpeg;base64,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"}
                alt="Card image cap"
              />
              <CardImgOverlay>
                
                <CardTitle
                  style={{
                    textShadow: "0px 0px 6px #000000",
                    textAlign: "Center",
                    fontSize: "30px"
                  }}
                >
                  {this.props.challenge.name}
                </CardTitle>
                <CardText
                  style={{
                    textShadow: "0px 0px 6px #000000",
                    textAlign: "Center",
                    fontSize: "30px"
                  }}
                >
  
                </CardText>
              </CardImgOverlay>
            </Card>
          </Col>
       

        {/* <Img cities={this.props.cities} /> */}
      </div>
    )
  }
}
