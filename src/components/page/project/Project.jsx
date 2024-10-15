import React from "react";
import AnimateLine from "../../common/AnimateLine";
import Breadcrumb from "../../common/Breadcrumb";
import SubscribArea from "../../common/SubscribArea";
import ProjectWrap from "./ProjectWrap";

function Project() {
  return (
    <>
      <div className="creasoft-wrap">
        <AnimateLine />
        <Breadcrumb pageName="Projects" pageTitle="Projects" />
        <ProjectWrap />
        <SubscribArea />
      </div>
    </>
  );
}

export default Project;
