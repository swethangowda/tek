import React from 'react';
import  {Row, Col} from 'reactstrap';
import './Featured-Post.css';
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
            width:50,
        }}
    />
);
const FeaturedPost = () => {
    return (
      <div style={divStyle}>
      <Row></Row>
      <Row>
      <Col sm="4"></Col>
      <Col className="business">FEATURED </Col>
      <Col className="process">POST</Col>
      <Col sm="4"></Col>
      </Row>
      <Row><Col sm="12" className="fpost">Most Featured Post</Col></Row>
      <ColoredLine color="black" />
      <Row className="recent"></Row>
      <Row>
      <Col sm="4">  <img src={require('../../assets/images/Asset 74@4x.png')} className="post" alt="teknotrait"/></Col>
      <Col sm="4">  <img src={require('../../assets/images/Asset 73@4x.png')} className="post" alt="teknotrait"/></Col>
      <Col sm="4">  <img src={require('../../assets/images/Asset 72@4x.png')} className="post" alt="teknotrait"/></Col>
      </Row>
      <Row><Col sm="3" className="Post-Text"> How to Debug Remote Android Devices</Col><Col sm="1"></Col>
      <Col sm="3" className="Post-Text1"> Standard end to end Quality Assurance Process</Col>
      <Col sm="3" className="Post-Text2"> Retrieving and Understanding Crash Logs</Col></Row>
      <Row className="recent1" ></Row>
      </div>
       )
   };

   export default FeaturedPost;
