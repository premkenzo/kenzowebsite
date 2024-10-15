import React from 'react'
import AnimateLine from '../../common/AnimateLine'
import Breadcrumb from '../../common/Breadcrumb'
import SubscribArea from '../../common/SubscribArea'
import ServiceDetailsWrap from './ServiceDetailsWrap'

function ServiceDetails3() {
  return (
    <>
        <div className="creasoft-wrap">
          <AnimateLine/>
          <Breadcrumb pageName="Cybersecurity Solutions" pageTitle="Cybersecurity Solutions"/>
          <ServiceDetailsWrap/>
          <SubscribArea/>
        </div>
    </>
  )
}

export default ServiceDetails3