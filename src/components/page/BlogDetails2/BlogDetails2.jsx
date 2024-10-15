import React from 'react'
import Breadcrumb from '../../common/Breadcrumb'
import SubscribArea from '../../common/SubscribArea'
import BlogDetailsWrap from './BlogDetailsWrap'

function BlogDetails2() {
  return (
    <>
    <Breadcrumb
  pageName={
    <>
      The Future of Insurance with AI: Transforming Claims Processing
      and Risk Assessment
    </>
  }
  pageTitle={
    <>
      The Future of Insurance with AI: Transforming    <br />Claims Processing and Risk Assessment
    </>
  }
/>
     <BlogDetailsWrap/>
     <SubscribArea/>
        
    </>
  )
}

export default BlogDetails2
