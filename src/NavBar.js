import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <div class="container">
        <input id="responsive-menu" type="checkbox" />
        <label for="responsive-menu">
          Menu <span id="menu-icon"></span>
        </label>
        <div id="overlay"></div>
        <ul>
          <li>
            <Link to="/homepage">Homepage</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/about">About Me</Link>
          </li>
        </ul>

        <ul id="social-media">
          <li>
            <a href="mailto:stepanovaky@gmail.com">
              <i class="fas fa-inbox"></i>
              <span class="screen-reader-text">Email</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/stepanovaky" target="_blank">
              <i class="fab fa-github-square"></i>
              <span class="screen-reader-text">Github</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/katerinaystepanova/"
              tqarget="_blank"
            >
              <i class="fab fa-linkedin"></i>
              <span class="screen-reader-text">LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
