import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import Installation from "../pages/Installation";
import NotFound from "../pages/NotFound";
import Error from "../pages/Error";
import AppDetails from "../pages/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <Error />,
    children: [
      { index: true, Component: Home },
      { path: "apps", Component: Apps },
      { path: "apps/:id", Component: AppDetails },
      { path: "installation", Component: Installation },
      { path: "*", Component: NotFound },
    ],
  },
]);

export default router;
