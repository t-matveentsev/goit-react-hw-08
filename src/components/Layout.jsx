import { Suspense } from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Outlet />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};

export default Layout;
