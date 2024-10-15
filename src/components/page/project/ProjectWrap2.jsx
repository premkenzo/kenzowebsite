import React from "react";
import ProjectCardFilter2 from "./ProjectCardFilter2";

function ProjectWrap2() {
  return (
    <>
      <div className="project-area sec-mar">
        <div className="container">
          <div className="title-wrap">
            <div className="sec-title white">
              {/* <span>Case Study</span> */}
              <h2>Projects</h2>
              {/* <p>
              Kenzo Infotech’s expertise in delivering custom technology solutions across various industries, from healthcare and finance to retail and human resources.</p> */}
            </div>
          </div>
          <ProjectCardFilter2/>
        </div>
      </div>
    </>
  );
}

export default ProjectWrap2;
