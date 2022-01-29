import React, { Component } from 'react';
import {Row, Col} from "antd"
import {PhoneOutlined, HomeOutlined, MailOutlined, GithubOutlined, LinkedinOutlined} from "@ant-design/icons"
export default class Contact extends Component {
  render() {
    return (
    <React.Fragment >
        <Row align="center">
            <Col span={3}>
            <PhoneOutlined style={{marginRight : "5px"}} />+91-9449046921
            </Col>
            <Col span={3}>
            <HomeOutlined style={{marginRight : "5px"}} /> Shivamogga, KA
            </Col>
            <Col span={4}>
            <MailOutlined style={{marginRight : "5px"}}  /> shrishadiga1@gmail.com
            </Col>
            <Col span={5}>
            <GithubOutlined style={{marginRight : "5px"}} /><span style={{cursor: "pointer"}} onClick={() => window.open("https://github.com/Shrisha21")}>https://github.com/Shrisha21</span>
            </Col>
            <Col span={5}>
            <LinkedinOutlined style={{marginRight : "5px"}} /><span style={{cursor: "pointer"}} onClick={() => window.open("https://www.linkedin.com/in/shrisha-adiga")}>linkedin.com/in/shrisha-adiga/ </span>
            </Col>
        </Row>
    </React.Fragment >
    );
  }
}
