import React from "react";
import "./Card.css";
import { SiGithub } from "react-icons/si";

function Card(props) {
  {
    console.log(props);
  }
  const project = props.project;
  return (
    <div class="cards-container">
      <div class="card-container">
        <div class="card">
          <div class="front">
            <img src={project.img} />
          </div>
          <div class="back">
            <a href={project.livelink} target="_blank">
              <h3 className="card-title">{project.title}</h3>
            </a>
            <p>{project.p1}</p>
            <p>{project.p2}</p>
            <p>{project.p3}</p>
            <p>{project.p4}</p>
            <a href={project.githublink} target="_blank">
              <p>
                <SiGithub />
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
