import Layout from "layouts/Layout";
import React from "react";
import { Outlet } from "react-router-dom";

function Casino() {
  return (
    // <Layout navbarProps={{ NavbarBottomContent: CasinoPageLinks }}>
    <Layout>
      <div className="pt-7px mb-6">
        <Outlet />
      </div>
    </Layout>
  );
}

export default Casino;
