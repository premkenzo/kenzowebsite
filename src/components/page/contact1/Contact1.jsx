import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import SubscribArea from "../../common/SubscribArea";
import ContactWrapper from "./ContactWrapper";
import AnimateLine from "../../common/AnimateLine";

function Contact1() {
  return (
    <>
      <div className="creasoft-wrap">
        <AnimateLine />
        <Breadcrumb pageTitle="Get a Quote" pageName="Get a Quote" />
        <ContactWrapper />
        <SubscribArea />
      </div>
    </>
  );
}

export default Contact1;
