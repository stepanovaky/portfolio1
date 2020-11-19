import React from "react";
import { PurringTails, ToDoList, QuizAppProject } from "./projects-helpers";
import NavBar from "./NavBar";
import Card from "./Card";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects fade-in">
      <NavBar />
      <h2>My Work</h2>
      <div className="projects-list">
        <Card project={ToDoList} />
        <Card project={QuizAppProject} />
        <Card project={PurringTails} />
      </div>
    </div>
  );
}

export default Projects;
