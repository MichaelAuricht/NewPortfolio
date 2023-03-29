import React from "react";
import "./WorkCard.css"

const WorkCard = (props) => {
  return (
    <div className="project-card">
          <img src={props.imgsrc} alt="img"></img>
          <h2 className="project-title">{props.title}</h2>
          <div className="pro-details">
            <p>{props.text}</p>
            <div className="pro-btns">
          <a href={props.view}><button class="btn primary-btn">View</button></a>
          <a href={props.source}><button class="btn highlighted-btn">Source</button></a>
            </div>
          </div>
        </div>
  )
}

export default WorkCard
