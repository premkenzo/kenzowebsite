import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/App";
import About from "./components/page/about/About";
import BlogSidebar from "./components/page/blog/BlogSidebar";
import BlogDetails from "./components/page/BlogDetails/BlogDetails";
import BlogDetails1 from "./components/page/BlogDetails1/BlogDetails1";
import BlogDetails2 from "./components/page/BlogDetails2/BlogDetails2";
import BlogDetails3 from "./components/page/BlogDetails3/BlogDetails3";
import BlogStandard from "./components/page/BlogStandard/BlogStandard";
import Contact from "./components/page/contact/Contact";
import Contact1 from "./components/page/contact1/Contact1";
import ErrorPage from "./components/page/error/ErrorPage";
import Faq from "./components/page/faq/Faq";
import HomePageTwo from "./components/page/homepage2/HomePageTwo";
import Pricing from "./components/page/pricing/Pricing";
import Project from "./components/page/project/Project";
import ProjectDetails from "./components/page/ProjectDetails/ProjectDetails";
import ProjectDetails1 from "./components/page/ProjectDetails1/ProjectDetails1";
import ProjectDetails2 from "./components/page/ProjectDetails2/ProjectDetails2";
import ProjectDetails3 from "./components/page/ProjectDetails3/ProjectDetails3";
import ProjectDetails4 from "./components/page/ProjectDetails4/ProjectDetails4";
import ProjectDetails5 from "./components/page/ProjectDetails5/ProjectDetails5";
import ProjectDetails6 from "./components/page/ProjectDetails6/ProjectDetails6";
import ProjectDetails7 from "./components/page/ProjectDetails7/ProjectDetails7";
import ProjectDetails8 from "./components/page/ProjectDetails8/ProjectDetails8";
import Service from "./components/page/service/Service";
import ServiceDetails from "./components/page/ServiceDetails/ServiceDetails";
import ServiceDetails1 from "./components/page/ServiceDetails1/ServiceDetails1";
import ServiceDetails2 from "./components/page/ServiceDetails2/ServiceDetails2";
import ServiceDetails3 from "./components/page/ServiceDetails3/ServiceDetails3";
import ServiceDetails4 from "./components/page/ServiceDetails4/ServiceDetails4";
import ServiceDetails5 from "./components/page/ServiceDetails5/ServiceDetails5";
import ServiceDetails6 from "./components/page/ServiceDetails6/ServiceDetails6";
import ServiceDetails7 from "./components/page/ServiceDetails7/ServiceDetails7";
import Team from "./components/page/team/Team";
import "./index.css";

// Default Warning/Error Hide
console.log = console.warn = console.error = () => {};

/*
=>version : 0.1
=>Event : Rendering all content to the web
=>Action: define all routes and page
@return HTML
*/

function Root() {
  return (
    <BrowserRouter basename="/">
      <Switch>
        {/* Load HomePageTwo as the default base page */}
        <Route exact path="/" component={HomePageTwo} />

        {/* All inner pages load layout component */}
        <Layout>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/about`}
            component={About}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/contact`}
            component={Contact}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/error`}
            component={ErrorPage}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blogs`}
            component={BlogSidebar}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blog-standard`}
            component={BlogStandard}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blogs/how-ai-is-revolutionizing-realthcare-enhancing-patient-care-and-operational-efficiency`}
            component={BlogDetails}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blogs/ai-in-banking-driving-customer-experience-and-fraud-prevention-with-advanced-algorithms`}
            component={BlogDetails1}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blogs/the-future-of-insurance-with-ai-transforming-claims-processing-and-risk-assessment`}
            component={BlogDetails2}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/services`}
            component={Service}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/services/it-support-for-businesses`}
            component={ServiceDetails}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/services/network-monitoring-management`}
            component={ServiceDetails1}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/services/cloud-services-and-cloud-management`}
            component={ServiceDetails2}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/services/cybersecurity-solutions`}
            component={ServiceDetails3}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/services/data-backup-disaster-recovery`}
            component={ServiceDetails4}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/services/enterprise-software-development`}
            component={ServiceDetails5}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/services/remote-monitoring-maintenance`}
            component={ServiceDetails6}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/services/it-consulting-and-strategy`}
            component={ServiceDetails7}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/projects/custom-ehr-Electronic-Health-Records-System`}
            component={ProjectDetails}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/projects/banking-solutions-platform`}
            component={ProjectDetails1}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/projects/employee-management-software`}
            component={ProjectDetails2}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/projects/healthcare-billing-and-claims-management-system`}
            component={ProjectDetails3}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/projects/cloud-based-inventory-management-system`}
            component={ProjectDetails4}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/projects/custom-crm-for-sales-teams`}
            component={ProjectDetails5}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/projects/insurance-policy-management-platform`}
            component={ProjectDetails6}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/projects/e-Commerce-platform-development`}
            component={ProjectDetails7}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/projects/telemedicine-platform-for-healthcare-providers`}
            component={ProjectDetails8}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/projects`}
            component={Project}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/team`}
            component={Team}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/pricing`}
            component={Pricing}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/faq`}
            component={Faq}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/get-a-quote`}
            component={Contact1}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/How-AI-and-Machine-Learning-Are-Revolutionizing-Customer-Service-in-2024`}
            component={BlogDetails3}
          />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default Root;

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
