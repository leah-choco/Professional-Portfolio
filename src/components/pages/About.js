import React from "react";

import "../../assets/App.css";

//My photo
//Component with short life story

import LeahImage from "../../assets/images/IMG_1381.JPG";
import Card from "react-bootstrap/Card";

function About() {
  return (
    <Card style={{ width: "50rem" }}>
      <Card.Img className="Leah-image" variant="top" src={LeahImage} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default About;
