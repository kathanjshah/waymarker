import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            &lt; I am <span className="purple">Kathan Jay Shah </span>
            from <span className="purple"> St. John's, Canada. </span> 
            I am final year student pursuing <span className="purple">Bachelors of Science</span>, 
            Majoring in Computer-Science, at <span className="purple">Memorial University of Newfoundland</span>. /&gt;
            <br/>
            <br/>
            <br/>
            <br/>
            <h1 style={{ textAlign: "center" }}>ExtraCurricular();</h1>
            <br/>I love outdoor activities!
          </p>
          <ul style={{ padding: "0px" }}>
            <li className="about-activity" >
              Biking(Mountaion biking) and hiking
            </li>
            <li className="about-activity">
              Cricket(NL wolves)
            </li>
            <li className="about-activity">
              Photography
            </li>
          </ul>

          <p style={{ color: "#33ACFF" }}>
            "This time shall pass too"{" "}
            <br></br>
            -N.L.Shah(My Grandfather loved this quote)
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
