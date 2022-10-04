import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home.js";
import injectContext from "./store/appContext";
import { PlanetsDetails } from "./views/PlanetsDetails.jsx";
import { PeopleDetails } from "./views/PeopleDetails.jsx";
import { Demo } from "./views/demo";

//components
import { Navbar } from "./component/navbar";


//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/PeopleDetails/:id" element={<PeopleDetails  />} />
            <Route path="/PlanetsDetails/:id" element={<PlanetsDetails />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="*" element={<h1>Not found 404</h1>} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
