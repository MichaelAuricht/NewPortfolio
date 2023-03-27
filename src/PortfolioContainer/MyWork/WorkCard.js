import React from "react";
import Batman from "../../images/batman.jpg";
import { NavLink } from "react-router-dom";

export default function WorkCard() {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        <div className="project-card">
          <img src={Batman} alt=""></img>
          <h2 className="project-title">Project Title</h2>
          <div className="pro-details">
            <p>This is text</p>
            <div className="pro-btns">
                <NavLink to="url.com" className="btn">
                    View
                </NavLink>
                <NavLink to="url.com" className="btn">
                    Source
                </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
