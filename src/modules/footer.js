import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div class="row">
      <div class="column" style="margin-left: 10%;">
        <h1 id="shortcuttitle">Shortcuts</h1>
        <div class="shortcut">
          <div class="links">
            <a href="main.html" class="link">
              Home
            </a>
            <a href="projects.html" class="link">
              Projects
            </a>
            <a href="affiliations.html" class="link">
              Affiliations
            </a>
          </div>
          <div class="links">
            <a href="resume.html" class="link">
              Resume
            </a>
            <a href="mailto:noahrr2@illinois.edu" class="link">
              Contact Me
            </a>
            <a href="https://github.com/nnrogers515" target="_blank" class="link">
              My GitHub
            </a>
          </div>
        </div>
      </div>
      <div class="column honor">
        <h2 style="text-decoration: underline;">Developer</h2>
        <span>
          <p style="white-space: pre-wrap;">Noah Rogers: (309) 265-2984</p>
        </span>
      </div>
    </div>
  );
}

export default Footer;
