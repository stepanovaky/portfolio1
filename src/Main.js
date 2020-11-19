import React from "react";
import { PurringTails } from "./projects-helpers";
import "./Main.css";
import NavBar from "./NavBar";
import Card from "./Card";

function Main() {
  return (
    <div className="main fade-in">
      <NavBar />

      <h1 className="fade-in">
        Hello, I'm Katerina and I am a full-stack web developer.
      </h1>
      <Card project={PurringTails} />
    </div>
  );
}

export default Main;
