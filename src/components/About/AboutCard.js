import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Srushti Talwekar </span>
            from <span className="purple"> Nagpur, India.</span>
            <br />
            I am recent graduate from SGGSIE&T, Nanded.
            <br />
            I have completed my BTech in Computer Science Engineering.
            <br />
            <br />
            In addition to Coding I also hold various responsobilities during my
            college, which I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Member at Gandhrava Drama Club.
            </li>
            <li className="about-activity">
              <ImPointRight />
              Joint Co-ordinator at Vatsalya club.
            </li>
            <li className="about-activity">
              <ImPointRight /> Member of Social Media and Website Portfolio at
              TNP Cell.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build solutions that inspire and make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Srushti</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
