// import React from "react";
// import GitHubCalendar from "react-github-calendar";
// import { Row } from "react-bootstrap";

// function Github() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//       <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
//         Days I <strong className="purple">Code</strong>
//       </h1>
//       <GitHubCalendar
//         username="srus1608"
//         blockSize={15}
//         blockMargin={5}
//         color="#c084f5"
//         fontSize={16}
//       />
//     </Row>
//   );
// }

// export default Github;

import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Col } from "react-bootstrap";
import gfg from "../../Assets/gfg.png";
import hackerrank from "../../Assets/hackerrank.jpeg";
import codingninja from "../../Assets/codingninja.png";
import leetcode from "../../Assets/leetcode.png";

function Github() {
  return (
    <div>
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          My <strong className="purple">Coding Platforms.</strong>
        </h1>
        <Col xs={3} md={2} className="tech-icons">
          <a
            href="https://www.geeksforgeeks.org/user/2020bcs0571/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={gfg}
              alt="GeeksforGeeks"
              style={{ width: "50px", height: "50px" }}
            />
          </a>
        </Col>
        <Col xs={3} md={2} className="tech-icons">
          <a
            href="https://www.hackerrank.com/profile/2020bcs057"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={hackerrank}
              alt="HackerRank"
              style={{ width: "50px", height: "50px" }}
            />
          </a>
        </Col>
        <Col xs={3} md={2} className="tech-icons">
          <a
            href="https://www.naukri.com/code360/profile/srush"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={codingninja}
              alt="Coding Ninjas"
              style={{ width: "50px", height: "50px" }}
            />
          </a>
        </Col>
        <Col xs={3} md={2} className="tech-icons">
          <a
            href="https://leetcode.com/u/srus1608/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={leetcode}
              alt="LeetCode"
              style={{ width: "50px", height: "50px" }}
            />
          </a>
        </Col>
      </Row>

      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Days I <strong className="purple">Code</strong>
        </h1>
        <GitHubCalendar
          username="srus1608"
          blockSize={15}
          blockMargin={5}
          color="#c084f5"
          fontSize={16}
        />
      </Row>
    </div>
  );
}

export default Github;
