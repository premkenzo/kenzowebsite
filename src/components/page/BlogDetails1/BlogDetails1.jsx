import React from 'react'
import Breadcrumb from '../../common/Breadcrumb'
import SubscribArea from '../../common/SubscribArea'
import BlogDetailsWrap from './BlogDetailsWrap'

function BlogDetails1() {
  return (
    <>
     <Breadcrumb
  pageName={
    <>
      AI in Banking: Driving Customer Experience and Fraud Prevention
    
      with Advanced Algorithms
    </>
  }
  pageTitle={
    <>
      AI in Banking: Driving Customer Experience and<br/>Fraud Prevention

      with Advanced Algorithms
    </>
  }
/>
     <BlogDetailsWrap/>
     <SubscribArea/>
        
    </>
  )
}

export default BlogDetails1
