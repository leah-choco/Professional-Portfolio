/*import React from "react";

import "../../assets/App.css";


const projects = [
    {
        id: 1,
        name: "Goal-E",
        image: "../assets/images",
        link: github repo
    },
    {
        id: 2,
        name: "Project 3",
        image:"../assets/images/coming soon.jpeg",
        link: github repo
    },
    {
        id: 3,
        name: "SQL",
        image: ?,
        link: github repo
    },
    {
        id: 4,
        name: "MongoDB",
        image: ?,
        link: github repo
    }


];

function Projects(props) {
    return (
        <ul className="projects">
            {props.projects.map(item =>(
                <li className="projects-item" key={item.id}>
                    {item.name}
                </li>

            ))}
        </ul>
    );
}

export default Projects;*/

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "../../assets/images/dave-ruck-GQZg8CrP3sc-unsplash.jpg";

function Projects() {
  return (
    <Card
      border="warning"
      className="project-component"
      style={{ width: "25rem" }}
    >
      <Card.Img className="boat-image" variant="top" src={Image} />
      <Card.Body>
        <Card.Title>Goal-E</Card.Title>
        <Card.Text>
          This project was built by four student developers using SQL and
          Handlebars.
        </Card.Text>
        <Button
          variant="warning"
          className="buttons"
          href="https://github.com/leah-choco/Goal-E"
        >
          Github
        </Button>
        <Button
          className="buttons"
          href="https://evening-stream-22967.herokuapp.com/"
          variant="warning"
        >
          Deployed Link
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Projects;
