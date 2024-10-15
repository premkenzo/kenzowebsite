import React from "react";
import ProjectCardFilter from "./ProjectCardFilter";

function ProjectWrap(props) {
  return (
    <>
      <div className="project-area sec-mar">
        <div className="container">
          <div className="title-wrap">
            <div className={`${"sec-title"} ${props.white}`}>
              <span>Case Studies</span>
              <h2>Projects</h2>
              <p>
              Kenzo Infotech’s expertise in delivering custom technology solutions across various industries, from healthcare and finance to retail and human resources.
              </p>
            </div>
          </div>
          <ProjectCardFilter/>
        </div>
      </div>
    </>
  );
}

export default ProjectWrap;
