// Layout.jsx
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="container   py-5">
      {" "}
      {/* Full height container */}
      {/* Grid Layout with 3:1 Ratio */}
      <div className="grid grid-cols-1 ">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
