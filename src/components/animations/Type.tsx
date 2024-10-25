import React from "react";
import Typewriter from "typewriter-effect";
// import useLocales from "../../hooks/useLocales";

function Type() {
  // const { translate } = useLocales();
  return (
    <Typewriter
      options={{
        strings: ["pmu", "master", "09371001262"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
