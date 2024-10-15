import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import SubscribArea from "../../common/SubscribArea";
import ServiceWrap from "./ServiceWrap";

function Service() {
  return (
    <>
      <div className="creasoft-wrap">
        <Breadcrumb pageName="Services" pageTitle="Services" />
        <ServiceWrap />
        <SubscribArea />
      </div>
    </>
  );
}

export default Service;
