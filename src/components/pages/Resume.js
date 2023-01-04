import React from "react";

import "../../assets/App.css";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Resume() {
  return (
    <Card style={{ width: "30rem" }}>
      <Card.Body>
        <Card.Title>Resume</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Proficiencies</Card.Subtitle>
        <Card.Text>
          <ul>
            <li>MongoDB and SQL</li>
            <li>Express</li>
            <li>React</li>
            <li>Node.js</li>
          </ul>
        </Card.Text>
        <Button
          variant="warning"
          className="buttons"
          href="https://docs.google.com/document/d/1-B0Bd3GqD-P8bBREHyThjBUX6MdnrExAtxKIVBB67Yw/edit?usp=sharing"
        >
          Resume
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Resume;
