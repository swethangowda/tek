import React from 'react';
import  {Row, Col} from 'reactstrap';
import './Header.css';

const divStyle = {

  padding:'30px 10px 30px 60px',
  fontWeight:'bold',
  fontSize:'15px',
};

const header = () => {
    return (
        <div className="Header">
          <Row>
            <Col xs="3" sm="3">
              <img src={require('../../assets/images/Asset 114@4x.png')} className="App-logo-footer" alt="teknotrait"/>
            </Col>
            <Col xs="1"  sm="1" >
              <img src={require('../../assets/images/Asset 106@4x.png')} className="App-logo-footer1"alt="mail"/>
            </Col>
            <Col xs="1" sm="1">
              <Row className="title">Drop us an Email</Row>
              <Row className="title1">info@teknotrait.com</Row>
            </Col>
            <Col xs="1" sm="1">
              <img src={require('../../assets/images/Asset 21@4x.png')} className="App-logo-footer1"alt="skype"/>
            </Col>
            <Col xs="1" sm="1">
              <Row className="title2">teknotrait.solutions</Row>
            </Col>
            <Col xs="1" sm="1">
              <img src={require('../../assets/images/Asset 99@4x.png')} className="App-logo-footer1" alt="call"/>
            </Col>
            <Col xs="1" sm="1">
              <Row className="title">HR</Row>
              <Row className="title1">987654321</Row>
            </Col>
            <Col xs="1" sm="1">
              <img src={require('../../assets/images/Asset 99@4x.png')} className="App-logo-footer1" alt="call"/>
            </Col>
            <Col xs="1" sm="1">
              <Row className="title">Sales</Row>
              <Row className="title1">987654321</Row>
            </Col>
          </Row>
         <div style={divStyle}>
          <Row>
            <Col xs="1" sm="1">
              Home
            </Col>
            <Col xs="1" sm="1">
              About Us
            </Col>
            <Col xs="1" sm="1">
              Services
            </Col>
            <Col xs="1" sm="1">
              Solutions
            </Col>
            <Col xs="1" sm="1">
              Portfolio
            </Col>
            <Col xs="1" sm="1">
              Blog
            </Col>
            <Col xs="1" sm="1">
              Contact Us
            </Col>
         </Row>
        </div>
      </div>
    )
};

export default header;
