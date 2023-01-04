import React from "react";

import "../../assets/App.css";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Resume() {
  return (
    <Card className="Resume-card" border="warning" style={{ width: "60rem" }}>
      <Card.Body>
        <Card.Title>Resume</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Proficiencies</Card.Subtitle>
        <Card.Text>
          <p>Languages that I have worked with: HTML, CSS, Javascript, React</p>
          <p>
            Technologies that I have learned: SQL and MongoDB, Express, Node.js
          </p>
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
