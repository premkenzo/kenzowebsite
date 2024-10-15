import React from "react";
import AnimateLine from "../../common/AnimateLine";
import Breadcrumb from "../../common/Breadcrumb";
import SubscribArea from "../../common/SubscribArea";
import ProjectDetailsWrap from "./ProjectDetailsWrap";

function ProjectDetails() {
  return (
    <>
      <div className="creasoft-wrap">
        <AnimateLine />
        <Breadcrumb pageName="Custom EHR (Electronic Health Records) System" pageTitle="Custom EHR (Electronic Health Records) System" />
        <ProjectDetailsWrap/>
        <SubscribArea />
      </div>
    </>
  );
}

export default ProjectDetails;
