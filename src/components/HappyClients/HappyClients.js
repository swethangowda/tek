import React from 'react';
import './HappyClients.css';
import  { Row, Col} from 'reactstrap';

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
const HappyClients = () => {
    return (

<div className="background">
<Row></Row>
<Row>
<Col sm="4"></Col>
<Col className="our">OUR HAPPY</Col>
<Col className="services">CLIENTS</Col>
<Col sm="4"></Col>
</Row>
<ColoredLine color="white" />
<Row >
    <img src={require('../../assets/images/Asset 120@4x.png')} className="clientimg" alt="teknotrait"/>
</Row>
<Row>
<Col sm="3">
<div className="">
      {' " " '}
      </div>
</Col>
<Col sm="6" className="clienttxt">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
Aenean commodo ligula eget dolor. Aenean massa.
Cum sociis natoque penatibus.</Col>
<Col sm="3"></Col>
</Row>
<Row>
<Col sm="4"></Col>
<Col sm="2"className="clienttxt1">Amit Pillai,</Col>
<Col sm="2"className="clienttxt2">Technopride Inc.</Col>
<Col sm="4"></Col></Row>
</div>
    )
};

export default HappyClients;
