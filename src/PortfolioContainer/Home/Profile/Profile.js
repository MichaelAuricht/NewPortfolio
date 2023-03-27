import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://github.com/MichaelAuricht">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/michael-auricht/">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hello, I'm{" "}
              <span className="highlighted-text">Michael Auricht</span>.
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full Stack Dev",
                    1000,
                    "React Dev",
                    1000,
                    "MERN Dev",
                    1000,
                    "JS Dev",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                mikeauricht@gmail.com
              </span>
            </span>
          </div>
          <div className="profile-options">
            <a href="mailto:mikeauricht@gmail.com">
              <button className="btn primary-btn">Contact Me</button>
            </a>
            <a href="CV_MichaelAuricht.pdf" download="CV_MichaelAuricht.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
