import React, { Component } from 'react';

export default class Projects extends Component {
  render() {
    return <div style={{marginLeft : "15px"}}>
        <div style={{ fontSize: "20px" }}>PROJECTS</div>
        <div style={{fontSize: "18px"}}>Application Control using Gestures </div>
        <p>
            <ul>
                <li>
                    Human Computing Interface (HCI) based project which is specially developed for paralyzed people
                    to control few applications on the laptop
                </li>
                <li>
                    Developed Data gloves to capture the gestures and python script for controlling the application
                </li>
                <li>
                    Music, Mail, News applications were controlled using data glove
                </li>
            </ul>
        </p>
        <div style={{fontSize: "18px"}}>CAR SERVO </div>
        <p>
            <ul>
                <li>
                    Full stack mini project developed using HTML, CSS, Php, and MYSQL database. 
                </li>
                <li>
                    Developed for booking a car service and getting feedback of the service.
                </li>
                <li>
                    Additionally, car spares sales was also developed
                </li>
            </ul>
        </p>
    </div>;
  }
}
