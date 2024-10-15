import React from "react";
import AnimateLine from "../../common/AnimateLine";
import Breadcrumb from "../../common/Breadcrumb";
import SubscribArea from "../../common/SubscribArea";
import ProjectDetailsWrap from "./ProjectDetailsWrap";

function ProjectDetails1() {
  return (
    <>
      <div className="creasoft-wrap">
        <AnimateLine />
        <Breadcrumb pageName="Banking Solutions Platform" pageTitle="Banking Solutions Platform" />
        <ProjectDetailsWrap/>
        <SubscribArea />
      </div>
    </>
  );
}

export default ProjectDetails1;
