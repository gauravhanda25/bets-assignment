import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import { isLoggedIn } from "bets-utils/service";
import Login from "bets-pages/Auth/Login";
import Home from "bets-pages/Home/Home";
import PublicHome from "bets-pages/Home/PublicHome";

function auth() {
  return isLoggedIn();
}

//import {} from 'recruitment-constants';
const RequireAuth = ({ children }) => {
  let location = useLocation();

  if (!auth()) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/public-home" element={<PublicHome />} />
      <Route
        path="/home"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRoutes;
