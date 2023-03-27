import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  const SCREEN_CONSTANTS = {
    description:
      "I'm a full stack web developer experienced with a wide range of the latest technologies. I'm hard-working, dedicated and aim to improve my tech abilities each and every day. I'm 33 years old living in the outer suburbs of Melbourne with my wife and two kids. I have experience in esports as a coach and desk talent on broadcasts in international tournaments.",
    hightlights: {
      bullets: [
        "Full Stack Web Development",
        "Interactive Frontend",
        "React Development",
        "Object Oriented Programming",
        "Managing Databases",
      ],
      heading: "Technical Skills",
    },
  };

  const renderHighlight = () => {
    return SCREEN_CONSTANTS.hightlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
      </div>
      <div className="about-me-card">
        <div className="about-me-profile"></div>
        <div className="about-me-details">
          <span className="about-me-description">
            {SCREEN_CONSTANTS.description}
          </span>
          <div className="about-me-highlights">
            <div className="highlight-heading">
              <span>{SCREEN_CONSTANTS.hightlights.heading}</span>
            </div>
            {renderHighlight()}
          </div>
          <div className="about-me-options">
          <a href="mailto:mikeauricht@gmail.com">
              <button className="btn primary-btn">Contact Me</button>
            </a>
            <a href="CV_MichaelAuricht.pdf" download="CV_MichaelAuricht.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
