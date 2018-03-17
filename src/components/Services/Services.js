import React from 'react';
import  {Row, Col} from 'reactstrap';
import './Services.css';
const divStyle = {
  backgroundColor: '#f1f1f1' ,
  color: 'black' ,
};
const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor:color,
            height: 1,
            width:70,
        }}
    />
);

const services = () => {
    return (
      <div style={divStyle}>
      <Row></Row>
      <Row>
      <Col sm="5"></Col>
      <Col sm="1" className="our">OUR </Col>
      <Col sm="1" className="services">SERVICES</Col>
      <Col sm="5"></Col>
      </Row>
      <ColoredLine color="black" />
      <Row>
      <Col sm="2" className="app"><img src={require('../../assets/images/Asset 80@4x.png')} className="App-logo-footer" alt="teknotrait"/></Col>
      <Col sm="2">
      <Row></Row>
      <Row></Row>
      <Row></Row>
      <Row></Row>
      <Row className="titles">Enterprise Application
      <Row className="titles">Development</Row></Row>
      </Col>
     <Col sm="2"><img src={require('../../assets/images/Asset 82@4x.png')} className="App-logo-footer" alt="teknotrait"/></Col>
     <Col sm="2">
     <Row></Row>
     <Row></Row>
     <Row></Row>
     <Row className="titles">Native and Hybrid App <Row>Development</Row></Row></Col>
     <Col sm="2"><img src={require('../../assets/images/Asset 83@4x.png')} className="App-logo-footer" alt="teknotrait"/></Col>
     <Col sm="2">
     <Row></Row>
     <Row></Row>
     <Row></Row>
     <Row className="titles">Software Testing</Row></Col>
    </Row>
    <Row></Row>
    <Row></Row>
    <Row></Row>
    <Row></Row>
    <Row></Row>
    <Row></Row>
    <Row></Row>
    <Row></Row><Row></Row>
    <Row></Row>
    <Row>
    <Col sm="2"><img src={require('../../assets/images/Asset 79@4x.png')} className="App-logo-footer" alt="teknotrait"/></Col>
    <Col sm="2">
    <Row></Row>
    <Row></Row>
    <Row></Row>
    <Row className="titles">Web Development</Row></Col>

   <Col sm="2"><img src={require('../../assets/images/Asset 78@4x.png')} className="App-logo-footer" alt="teknotrait"/></Col>
   <Col sm="2">
   <Row></Row>
   <Row></Row>
   <Row></Row>
   <Row className="titles">UI/UX Designing</Row></Col>
   <Col sm="2"><img src={require('../../assets/images/Asset 81@4x.png')} className="App-logo-footer" alt="teknotrait"/></Col>
   <Col sm="2">
   <Row></Row>
   <Row></Row>
   <Row></Row>
   <Row className="titles">Digital Marketing</Row></Col>
  </Row>
  <Row className="bottom"></Row>
     </div>
    )

};

export default services;
