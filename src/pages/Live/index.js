import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

function Index() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/live") {
      navigate("event-view", { replace: true });
    }
  }, [navigate, location]);

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Index;
