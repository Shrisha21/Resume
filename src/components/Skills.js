import React, { Component } from 'react';
import { Divider } from "antd"
export default class Skills extends Component {
  render() {
    return <div>
      <div style={{ fontSize: "20px" }}>SKILLS</div>
      <ul>
        <li>JavaScript </li>
        <li>ReactJS </li>
        <li>HTML </li>
        <li>CSS </li>
        <li>Data Management - Redux </li>
        <li>Learning Hooks</li>
      </ul>
      <Divider />
      <div style={{ fontSize: "20px" }}>EDUCATION</div>
      <ul>
        <li>
          <p><u>B.E in Computer Science & Engineering</u></p>
          <p>PES Institute of Technology and Management  (2016 - 2020)</p>
          <p>GPA : 8.33</p>
        </li>
        <li>
          <p><u>XII: Pre-University Schooling</u></p>
          <p>PACE Ultra Modern PU College (2014 - 2016)</p>
          <p>Percentage : 81.50%</p>

        </li>
        <li>
          <p><u>X : SSLC</u>
          </p>
          <p>Sri Mahaveer Vidhyalaya(2014)</p>
          <p>Percentage : 92.46%</p>
        </li>
      </ul>
      <Divider />
      <div style={{ fontSize: "20px" }}>ACHIEVEMENTS</div>
      <ul>
        <li>
          Certified AWS Cloud Practitioner
        </li>
        <li>
          Spot Award for delivering the complete user stories with high quality
        </li>
        <li>
          Spot Award for taking initiative and fixing all the security related concerns
        </li>
      </ul>
    </div>;
  }
}
