import React from 'react';
import './Development-Process.css';
import  { Row, Col} from 'reactstrap';

const divStyle = {
  backgroundColor: 'black' ,
  color: 'white' ,
};
const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor:color,
            height: 1,
            width:80,
        }}
    />
);
const DevelopmentProcess = () => {
    return (

<div style={divStyle}>
<Row>
<Col sm="4"></Col>
<Col className="business">DEVELOPMENT </Col>
<Col className="process">PROCESS</Col>
<Col sm="4"></Col>
</Row>
<ColoredLine color="white" />
<Row>
  <img src={require('../../assets/images/Asset 75@4x.png')} className="clientimg1" alt="teknotrait"/>
</Row>
</div>

    )
};

export default DevelopmentProcess;
