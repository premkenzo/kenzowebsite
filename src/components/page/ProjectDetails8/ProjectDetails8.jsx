import React from "react";
import AnimateLine from "../../common/AnimateLine";
import Breadcrumb from "../../common/Breadcrumb";
import SubscribArea from "../../common/SubscribArea";
import ProjectDetailsWrap from "./ProjectDetailsWrap";

function ProjectDetails8() {
  return (
    <>
      <div className="creasoft-wrap">
        <AnimateLine />
        <Breadcrumb pageName="Telemedicine Platform for Healthcare Providers" pageTitle="Telemedicine Platform for Healthcare Providers" />
        <ProjectDetailsWrap/>
        <SubscribArea />
      </div>
    </>
  );
}

export default ProjectDetails8;
