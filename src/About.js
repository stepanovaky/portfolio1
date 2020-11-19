import React from "react";
import Selfie from "./Images/Selfie.JPG";
import NavBar from "./NavBar";
import "./About.css";

function About() {
  return (
    <div className="about fade-in">
      <NavBar />
      <h1 id="aboutme">Hi, I'm Katerina and I am a full-stack developer.</h1>
      <img src={Selfie} alt="Katerina" />
      <p>
        I am a web developer and student of the Engineering Flex bootcamp
        program at Thinkful. I enjoy coding because each project is a challenge
        and a puzzle for me.
      </p>
      <br />
      <p>
        I am looking forward to working with a team of developers and honing my
        technical skills even further.
      </p>
      <br />
      <p>
        When I am not coding, I am home with my small menagerie of animals.
        Outside of coding it is my goal to become a Court Appointed Special
        Advocate and help foster children.
      </p>
      <br />
    </div>
  );
}

export default About;
