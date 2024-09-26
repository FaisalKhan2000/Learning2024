import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="container   py-5">
      <main className="flex items-center justify-center">
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
