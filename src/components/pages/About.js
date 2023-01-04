import React from "react";

import "../../assets/App.css";

//My photo
//Component with short life story

import LeahImage from "../../assets/images/IMG_1381.JPG";
import Card from "react-bootstrap/Card";

function About() {
  return (
    <Card className="About-card" border="warning" style={{ width: "50rem" }}>
      <Card.Img className="Leah-image" variant="top" src={LeahImage} />
      <Card.Body>
        <Card.Title>Leah Choco</Card.Title>
        <Card.Text>
          I am a MERN certified web developer, currently living in Middle
          Tennessee with my husband and three children. My hobbies include:
          spending time with my family outside, studying history, and growing my
          coding knowledge base. This app will stay up to date with current
          Projects and certifications.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default About;
