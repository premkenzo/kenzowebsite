import React from 'react'
import AnimateLine from '../../common/AnimateLine'
import Breadcrumb from '../../common/Breadcrumb'
import SubscribArea from '../../common/SubscribArea'
import ServiceDetailsWrap from './ServiceDetailsWrap'

function ServiceDetails1() {
  return (
    <>
        <div className="creasoft-wrap">
          <AnimateLine/>
          <Breadcrumb pageName="Network Monitoring & Management" pageTitle="Network Monitoring & Management"/>
          <ServiceDetailsWrap/>
          <SubscribArea/>
        </div>
    </>
  )
}

export default ServiceDetails1