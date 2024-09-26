import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import VerifyEmail from "./pages/verify-email";
import ForgetPassword from "./pages/forget-password";
import ResetPassword from "./pages/reset-password";
import Dashboard from "./pages/dashboard";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "verify-email",
          element: <VerifyEmail />,
        },
        {
          path: "forget-password",
          element: <ForgetPassword />,
        },
        {
          path: "reset-password/:token",
          element: <ResetPassword />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
