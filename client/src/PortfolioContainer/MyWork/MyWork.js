import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./MyWork.css";
import qna from "../../../src/img/MyWork/qna.jpg";
import me from "../../../src/img/MyWork/me.jpg";
import batman from "../../../src/img/MyWork/batman.jpg"
import qmark from "../../../src/img/MyWork/qmark.png";
import shape from "../../../src/img/MyWork/shape-bg.png";

export default function MyWork(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"My Work"}
        subHeading={"Examples of my skills"}
      />
      <section className="mywork-section" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="mywork-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="mywork-item">
                  <div className="mywork-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      A REACT App for asking questions which allows users 
                      to post answers as comments which can also be up and 
                      downvoted by other users to change their preference 
                      underneath the original post.
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="project-info">
                    <img src={qna} alt="no internet connection"></img>
                    <a href="https://ma-qna.herokuapp.com/"><h5>QNA</h5></a>
                    <p>Role: Full Stack, Tools: MERN, ApolloServer, GraphQL</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="mywork-item">
                  <div className="mywork-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      An app that allows the user to see reviews, trailers, ratings 
                      and related media of movies from the past, present and future.
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="project-info">
                    <img src={batman} alt="no internet connection"></img>
                    <a href="https://trietryannguyen.github.io/project-group-1/"><h5>MovieBox</h5></a>
                    <p>Role: Organization, Presentation, Back End. Tools: TMDb, HTML, CSS, JS</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="mywork-item">
                  <div className="mywork-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      A clean REACT Portfolio app
                      featuring About, Contact, Projects and more.
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="project-info">
                    <img src={me} alt="no internet connection"></img>
                    <h5>My Portfolio Website</h5>
                    <p>Role: Full Stack, Tools: HTML, CSS, REACT</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="mywork-item">
                  <div className="mywork-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Project 4 Info
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="project-info">
                    <img src={qmark} alt="no internet connection"></img>
                    <h5>Project 4 Name</h5>
                    <p>Role: Full Stack. Tools: HTML, CSS, REACT</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="not responding" />
      </div>
    </div>
  );
}