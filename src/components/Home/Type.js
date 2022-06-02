import React from "react";
// import Typewriter from "typewriter-effect";
import TypeWriterEffect from 'react-typewriter-effect';

function Type() {
  return (
    <TypeWriterEffect
      options={{
        strings: [
          "Developer",
          "Deep Learning Engineer",
          "MERN Stack Developer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
