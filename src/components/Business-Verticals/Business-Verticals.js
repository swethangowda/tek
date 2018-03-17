import React from 'react';
import  {Row, Col} from 'reactstrap';
import './Business-Verticals.css';
const divStyle = {
  backgroundColor: '#ffffff' ,
  color: 'black' ,
};
const divStyle1 = {

  padding:'30px 10px 30px 60px',
};
const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor:color,
            height: 1,
            width:60,
        }}
    />
);

const BusinessVertical = () => {
    return (
      <div style={divStyle}>
      <Row></Row>
      <Row>
      <Col sm="4"></Col>
      <Col sm="2" className="our">BUSINESS </Col>
      <Col sm="2" className="services">VERTICALS</Col>
      <Col sm="4"></Col>
      </Row>
      <ColoredLine color="black" />
      <Row className="recent"></Row>

      <div style={divStyle1}>
       <Row className="bVerticals">
         <Col xs="2" sm="2">
           Finance
         </Col>
         <Col xs="2" sm="2">
           E-Commerce
         </Col>
         <Col xs="2" sm="2">
           Fashion
         </Col>
         <Col xs="2" sm="2">
           Technology
         </Col>
         <Col xs="2" sm="2">
           Healthcare
         </Col>

      </Row>
      <Row>
        <Col sm="4" className="commerce">
          <Row className="ecomm">E Commerce</Row>
          <Row className="left">We deepened vast experience of delivering
            best and advanced e-Commerce Solutions
            that boost your business worldwide and increase
            its ROIBuilding B2C, B2E and B2B commerce solutions
            for retailers to boost online strategy, increase sales,
            operational ease, and customer delight.</Row>
            <Row className="ecomm">What we Offer</Row>
            <Row className="ecomm1">
            <li>Mobile Apps for Existing Websites</li>
            <li>Support for E-Commerce Platforms</li>
            <li>Retail Mobility Solutions</li>
            </Row>
        </Col>
        <Col sm="1"></Col>
        <Col sm="4">
          <img src={require('../../assets/images/Asset 58@4x.png')} className="ecommerce" alt="teknotrait"/>
        </Col>
      </Row>
     </div>
    </div>
     )
 };

 export default BusinessVertical;
