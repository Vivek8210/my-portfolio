import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vivek Kumar </span>
            from <span className="purple"> Patna, Bihar.</span>
            <br />I have completed BTech in mechanical from Universty College
               Of Engineering ,(Vinoba Bhave Universty), Hazaribagh (Jharkhand)
           .
            <br />
            <br />
            I was always  curious to know about how the web aplication work, so I searched on google 
            and also learned HTML, CSS but I want more knowledge of coding, so, I search a platform 
            where I can get technical knowdledge as well as soft skill so, 
            After Graduation I join Masai School and persuing full Stack  Developer with specialization in MERN stack
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
