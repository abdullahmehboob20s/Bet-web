import LivePageLinks from "components/LivePageLinks";
import Layout from "layouts/Layout";
import React, { useEffect } from "react";
import { Outlet, useNavigate, useMatch } from "react-router-dom";

function Index() {
  const navigate = useNavigate();
  const isLivePage = useMatch("/live");

  useEffect(() => {
    if (isLivePage) {
      navigate("event-view", { replace: true });
    }
  }, [isLivePage, navigate]);

  return (
    <Layout navbarProps={{ NavbarBottomContent: LivePageLinks }}>
      <div className="pt-7px mb-6">
        <Outlet />
      </div>
    </Layout>
  );
}

export default Index;
