import {
  BrowserRouter,
  Route,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Header from "./components/header";
import Layout from "./Layout/layout";
import Home from "./pages/home";
import Cart from "./pages/cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
