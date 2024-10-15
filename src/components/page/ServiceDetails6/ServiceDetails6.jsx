import React from 'react'
import AnimateLine from '../../common/AnimateLine'
import Breadcrumb from '../../common/Breadcrumb'
import SubscribArea from '../../common/SubscribArea'
import ServiceDetailsWrap from './ServiceDetailsWrap'

function ServiceDetails6() {
  return (
    <>
        <div className="creasoft-wrap">
          <AnimateLine/>
          <Breadcrumb pageName="Remote Monitoring & Maintenance" pageTitle="Remote Monitoring & Maintenance"/>
          <ServiceDetailsWrap/>
          <SubscribArea/>
        </div>
    </>
  )
}

export default ServiceDetails6