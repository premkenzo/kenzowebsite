import React from 'react'
import Breadcrumb from '../../common/Breadcrumb'
import SubscribArea from '../../common/SubscribArea'
import BlogDetailsWrap from './BlogDetailsWrap'

function BlogDetails() {
  return (
    <>
     <Breadcrumb
  pageName={
    <>
      How AI is Revolutionizing Healthcare:

      Enhancing Patient Care and Operational Efficiency
    </>
  }
  pageTitle={
    <>
      How AI is Revolutionizing Healthcare:
      <br />
      Enhancing Patient Care and Operational Efficiency
    </>
  }
/>

     <BlogDetailsWrap/>
     <SubscribArea/>
        
    </>
  )
}

export default BlogDetails
