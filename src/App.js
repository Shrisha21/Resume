import React, { Component } from "react";
import "./index.css";
import BasicDetails from "./components/BasicDetails";
import Contact from "./components/Contact";
import { Divider } from "antd";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Interests from "./components/Interests"
import Projects from "./components/Projects";
import { Row, Col } from "antd";
export default class App extends Component {
  render() {
    return (
      <div>
        <BasicDetails />
        <br />
        <Contact />
        <Divider />
        <Row>
          <Col span={16}>
            <Experience />
            <Divider />
            <Projects />
          </Col>
          <Col style={{backgroundColor : "whitesmoke"}} span={8}>
            <Skills />
            <Divider />
            <Interests />
          </Col>
        </Row>
      </div>
    );
  }
}
