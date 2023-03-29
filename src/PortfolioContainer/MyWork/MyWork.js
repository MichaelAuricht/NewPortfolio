import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Work from "./Work";

export default function MyWork(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className="my-work-container screen-container" id={props.id || ""}>
      <div className="my-work-parent">
        <ScreenHeading title={"My Work"} subHeading={"A Few Examples of My Work"} />
      </div>
        <Work />
    </div>
  );
}
