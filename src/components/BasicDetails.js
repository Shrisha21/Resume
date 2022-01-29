import React, { Component } from 'react';
import MyImage from "../images/MyImage.jpg"
import {Row, Col} from "antd"
export default class BasicDetails extends Component {
  render() {
    return <div>
      <Row>
        <Col span={19}>
        <div align="center" className='name'>SHRISHA G ADIGA</div>
        <div align="center" style={{fontSize: "20px"}}>UI DEVELOPER</div>
        <div align="center">
        Driven towards seeking new opportunities and being part of a progressive organization <br /> that utilizes my skills in addition to enhancing my knowledge.
        </div>
        </Col>
        <Col span={5}>
        <img src={MyImage} alt="Avatar" class="avatar" />
        </Col>
      </Row>
        
    </div>;
  }
}
