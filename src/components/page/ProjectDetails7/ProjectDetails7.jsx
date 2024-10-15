import React from "react";
import AnimateLine from "../../common/AnimateLine";
import Breadcrumb from "../../common/Breadcrumb";
import SubscribArea from "../../common/SubscribArea";
import ProjectDetailsWrap from "./ProjectDetailsWrap";

function ProjectDetails7() {
  return (
    <>
      <div className="creasoft-wrap">
        <AnimateLine />
        <Breadcrumb pageName="E-Commerce Platform Development" pageTitle="E-Commerce Platform Development" />
        <ProjectDetailsWrap/>
        <SubscribArea />
      </div>
    </>
  );
}

export default ProjectDetails7;
