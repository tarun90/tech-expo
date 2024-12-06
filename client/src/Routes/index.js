import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LayoutComponent from "../Layout/LayoutComponent/LayoutComponent";
import AboutUs from "../Pages/AboutUs/AboutUs";
import HomePage from "../Pages/HomePage/HomePage";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Speaker from "../Pages/SpeakersPage/Speaker";
import BecomeExhibitor from "../Pages/Exhibitor/BecomeExhibitor/BecomeExhibitor";
import ExhibitorDirectory from "../Pages/Exhibitor/ExhibitorDirectory/ExhibitorDirectory";
import Agenda from "../Pages/AboutEvent/Agenda/Agenda";
import Media from "../Pages/AboutEvent/MediaPage/Media";
import FloorPlan from "../Pages/AboutEvent/FloorPlan/FloorPlan";
import Industries from "../Pages/AboutEvent/Industries/Industries";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "../Pages/TermsAndConditions/TermsAndConditions";
import SponsorDirectory from "../Pages/SponsorDirectory/SponsorDirectory";
import Sponsor from "../Pages/Sponsor/Sponsor";
import CoreTeam from "../Pages/CoreTeam/CoreTeam";
import Networking from "../Pages/Networking/Networking";
import AboutEvent from "../Pages/AboutEvent/AboutEvent";


const RoutesComponent = () => {
  const routesArr = [
    {
      path: "/",
      component: <HomePage />,
      wrapRoute: "publicRoute",
    },
    {
      path: "/about-us",
      component: <AboutUs />,
      wrapRoute: "publicRoute",
    },

    {
      path: "/about-event",
      component: <AboutEvent />,
      wrapRoute: "publicRoute",
    },


    {
      path: "/contactus",
      component: <ContactUs />,
      wrapRoute: "publicRoute",
    },
    {
      path: "/speakers",
      component: <Speaker />,
      wrapRoute: "publicRoute",
    },
    {
      path: "/speakers",
      component: <Speaker />,
      wrapRoute: "publicRoute",
    },
    {
      path: "/become-exhibitor",
      component: <BecomeExhibitor />,
      wrapRoute: "publicRoute",
    },
    {
      path: "/exhibitors",
      component: <ExhibitorDirectory />,
      wrapRoute: "publicRoute",
    },
    {
      path: "/agenda",
      component: <Agenda/>,
      wrapRoute: "publicRoute",
    },
    {
      path: "/media",
      component: <Media/>,
      wrapRoute: "publicRoute",
    },
    {
      path: "/floor-plan",
      component: <FloorPlan/>,
      wrapRoute: "publicRoute",
    },
    {
      path: "/attendees-from-industries",
      component: <Industries/>,
      wrapRoute: "publicRoute",
    },
    {
      path: "/privacy-policy",
      component: <PrivacyPolicy/>,
      wrapRoute: "publicRoute",
    },
    {
      path: "/terms-condition",
      component: <TermsAndConditions/>,
      wrapRoute: "publicRoute",
    },
    {
      path: "/sponsors-directory",
      component: <SponsorDirectory/>,
      wrapRoute: "publicRoute",
    },
    {
      path: "/sponsor",
      component: <Sponsor/>,
      wrapRoute: "publicRoute",
    },
    {
      path: "/core-team",
      component: <CoreTeam/>,
      wrapRoute: "publicRoute",
    },
    {
      path: "/networkingopportunity",
      component: <Networking/>,
      wrapRoute: "publicRoute",
    },
  ];
  return (
    <Routes>
      {routesArr.map((element, key) => {
        const layoutType = element.layoutType || "default";
        switch (element.wrapRoute) {
          case "publicRoute":
            return (
              <Route
                key={key}
                path={element.path}
                element={
                  <LayoutComponent layoutType={layoutType} element={element}>
                    {element.component}
                  </LayoutComponent>
                }
              />
            );
          default:
            return (
              <Route
                key={key}
                path={element.path}
                element={element.component}
              />
            );
        }
      })}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default RoutesComponent;
