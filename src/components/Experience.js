import React, { Component } from 'react';

export default class Experience extends Component {
  render() {
    return <div style={{marginLeft : "15px"}}>
        <div style={{fontSize: "20px"}}>EXPERIENCE</div>
        <div style={{fontSize: "18px"}}>UI Developer (Software Engineer)<span style={{float : "right", marginRight: "20px"}}>AUG 2020 - Present</span></div>
        <p>BETSOL Pvt. Ltd. - Bengaluru, KA</p>
        <p><u>Project: </u>Avaya Experience Portal (Client - Avaya). Experience Avaya provides a suite of solution demos built
upon a flexible platform, all geared toward delivering excellent demo experiences to the Customers.</p>
        <p><u>Responsibilities </u></p>
        <ul>
            <li>
            Identified web-based user interactions and developed highly-responsive user
interface components via React concept
            </li>
            <li>
            Translated designs & wireframes into high-quality code and wrote application
interface code following React.js workflows
            </li>
            <li>
            Maintained states in the stores and dispatched the actions using Redux.
            </li>
            <li>
            Applied optimization techniques to reduce page size and load times to enhance user
experience using Lazy Loading and Pagination.
            </li>
            <li>
            Used Antd - React UI library that contains a set of high quality components 
            for building rich, interactive user interfaces
            </li>
            <li>
            Programmed using ES6, React and Redux on a daily basis, and taught React and Redux
at company-wide Knowledge sharing meetings.
            </li>
        </ul>
        <div style={{fontSize: "18px"}}>UI Developer (Associate Software Engineer Intern)<span style={{float : "right", marginRight: "20px"}}>JAN 2020 - MAR 2020</span></div>
        <p>BETSOL Pvt. Ltd. - Bengaluru, KA</p>
        <p><u>Project: </u>ZMANDA (BETSOL's Product). Enterprise based cloud backup and recovery product</p>
        <p><u>Responsibilities </u></p>
        <ul>
            <li>
                Worked on licensing part by giving user to upload the license file and displaying the necessary message.
            </li>
            <li>
            Applied optimization techniques to reduce page size and load times to enhance user
experience using Pagination.
            </li>
            <li>
            Programmed using ES6, React and Redux for state management.
            </li>
        </ul>
    </div>;
  }
}
