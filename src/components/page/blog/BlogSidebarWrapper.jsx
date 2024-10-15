import React from 'react'
import BannerWidget from './BannerWidget'
import CatagoryWidget from './CatagoryWidget'
import NewPostWidget from './NewPostWidget'
import PostTagWidget from './PostTagWidget'
import SearchWidget from './SearchWidget'
import Pagination from '../../common/Pagination'
import SingleBlog from './SingleBlog'

function BlogSidebarWrapper() {
  return (
    <>
     <div className="blog-grid sec-mar-top">
         <div className="container">
             <div className="row">
                 <div className="col-lg-4">
                     {/* <SearchWidget/>
                     <CatagoryWidget/>
                     <NewPostWidget/>
                     <PostTagWidget/>
                     <BannerWidget/> */}
                 </div>
                 <div className="col-lg-12">
                     <div className="blog-item-grid">
                         <div className="row g-4">
                             <SingleBlog image="/img/blog/blog-1.jpg" date="5.05.2024"  details="How AI is Revolutionizing Healthcare: Enhancing Patient Care and Operational Efficiency" link={`${process.env.PUBLIC_URL}/blogs/how-ai-is-revolutionizing-realthcare-enhancing-patient-care-and-operational-efficiency`}  />
                             <SingleBlog image="/img/blog/blog-2.jpg" date="15.05.2024" details="AI in Banking: Driving Customer Experience and Fraud Prevention with Advanced Algorithms" link={`${process.env.PUBLIC_URL}/blogs/ai-in-banking-driving-customer-experience-and-fraud-prevention-with-advanced-algorithms`}  />
                             <SingleBlog image="/img/blog/blog-3.jpg" date="25.05.2024" details="The Future of Insurance with AI: Transforming Claims Processing and Risk Assessment" link={`${process.env.PUBLIC_URL}/blogs/the-future-of-insurance-with-ai-transforming-claims-processing-and-risk-assessment`} /> 
                            

                         </div>
                     </div>
                     {/* <Pagination /> */}
                 </div>
             </div>
         </div>
    </div>   
    </>
  )
}

export default BlogSidebarWrapper