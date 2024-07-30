import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Proactive and Tech enthusiast ",
          " Web Developer",
          "MERN Stack Developer",
          "Open Source Contributor",
          "Environmental Steward",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
