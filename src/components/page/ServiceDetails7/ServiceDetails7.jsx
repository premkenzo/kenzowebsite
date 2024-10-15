import React from 'react'
import AnimateLine from '../../common/AnimateLine'
import Breadcrumb from '../../common/Breadcrumb'
import SubscribArea from '../../common/SubscribArea'
import ServiceDetailsWrap from './ServiceDetailsWrap'

function ServiceDetails7() {
  return (
    <>
        <div className="creasoft-wrap">
          <AnimateLine/>
          <Breadcrumb pageName="IT Consulting & Strategy" pageTitle="IT Consulting & Strategy"/>
          <ServiceDetailsWrap/>
          <SubscribArea/>
        </div>
    </>
  )
}

export default ServiceDetails7