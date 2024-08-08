import React from "react";
 
import Footer from "../Footer";
import Header from "../Header";

import "./globals.scss";

const Layout = ({ children }) => {

  return (
    <>

      <div>
        <Header />
        <main id="page-wrap">{children}</main>
        <Footer />
      </div>
      <div id="video_modal" />
    </>
  );
};

export default Layout;
