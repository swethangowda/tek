import React from 'react';

import './Footer.css';
import  { Row, Col} from 'reactstrap';
const divStyle = {
  backgroundColor: '#444444' ,
  color: 'white' ,
};
const footer = () => {
    return (

<div style={divStyle}>
      <Row>
      <Col xs="2">
      <Row>
      <img src={require('../../assets/images/Asset 54@4x.png')} className="App-logo-footer2" alt="teknotrait"/>
      </Row>

      <Row className="left1">WE BUILD IDEAS FOR TODAY AND TOMORROW</Row>
      <Row className="left1"> Headquarters:</Row>
      <Row className="left1">
                14,Ground Floor,35th Main,4th
                cross,KAS Officers Colony,
                BTM 2nd stage,Bengaluru,
                Karnataka560076</Row>

      <Row className="left1">Phone:(91)987654321</Row>
      <Row className="left1"> Fax:(91)987654321</Row>
      <Row className="left1"> Email:info@teknotrait.com</Row>
      </Col>
      <Col xs="1"></Col>
      <Col xs="2">
      <Row className="recent"></Row>
       <Row className="left12">BLOGROLL</Row>
       <Row className="left1">Documentation</Row>
       <Row className="left1">Feedback</Row>
       <Row className="left1">Plugins</Row>
       <Row className="left1">Support Forum</Row>
       <Row className="left1">Themes</Row>
       <Row className="left1">Wordpress Blog</Row>
       <Row className="left1">Wordpress Planet</Row></Col>
      <Col xs="2">
      <Row className="recent"></Row>
      <Row className="left12">RECENT POSTS</Row>
      <Row className="left1">Lorem Ipsum dolor sit <Row>amet,consectetur</Row></Row>
      <Row className="left1">01st Jan 2018</Row>
      </Col>
      <Col xs="1"></Col>
      <Row>Total</Row>
      <Row>Clients</Row>
      </Row>
  <Row>
  <Row className="subscribe">
  Subscribe to Our newsletter to get Important News,
  Amazing Offers and Inside Scoops:
  </Row>
  <Col sm="12" className="copy1"> Copyrights 2018 All Rights Reserved by Teknotrait Solutions Pvt Ltd</Col>
 </Row>
 <Row>
 <Col sm="12" className="copy">  Terms of Use/ Privacy Policy</Col>
</Row>
</div>

    )
};

export default footer;
