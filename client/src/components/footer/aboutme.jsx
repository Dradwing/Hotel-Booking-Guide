import React from "react";
import profile from "./../../images/profile.jpg";

function AboutMe() {
  return (
    <div className="aboutme">
      <p style={{ fontWeight: "550", fontSize: "x-large", marginLeft: "15px" }}>
        About Me
      </p>
      <img
        src={profile}
        alt="A"
        style={{
          borderRadius: "27px",
          display: "block",
          height: "80px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />

      <p
        style={{
          fontWeight: "550",

          fontSize: "x-large",
          margin: "0",
          textAlign: "center",
          fontStyle: "oblique",
        }}
      >
        Ashutosh Saini
      </p>
      <p style={{ fontStyle: "italic" }}>
        I am a Full Stack Web Developer. Currently, I am pursuing my B.Tech
        degree from Indian Institute of Information Technology, Sonepat. I have
        great passion for Commpetitve Programming. And I love to do things as
        perfectly as I can.
      </p>
    </div>
  );
}
export default AboutMe;
