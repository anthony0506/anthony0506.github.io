import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anthony Araki </span>
            from <span className="purple"> Toronto, Canada.</span>
            <br /> I am an experienced web developer who's ready for new challenges, maybe it is my pleasure. My goal is to leverage solutions for diverse users and clients.
            <br />
            In other words, I am currently looking for a new challenge or an opportunity.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "What seems to be for free but actually is the most valuable, it is time!"{" "}
          </p>
          <footer className="blockquote-footer">Anthony</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
