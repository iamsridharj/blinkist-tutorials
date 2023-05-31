import { createBrowserRouter, Navigate } from "react-router-dom";

import BlogsList from "./pages/BlogsList";
import FeatureVariationControl from "./pages/FeatureVariationControl/FeatureVariationControl";
import Result from "./pages/Result/Result";

import { renderLayout } from "./components/Layout/Layout";

const routes = [
  {
    path: "/blinkist-tutorials",
    element: renderLayout(<BlogsList />),
  },
  {
    path: "/feature-toggles",
    element: renderLayout(<FeatureVariationControl />),
  },
  {
    path: "/result",
    element: renderLayout(<Result />),
  },
  {
    path: "*",
    errorElement: <h1>Error page not found</h1>,
    element: <Navigate to="/blinkist-tutorials" replace />,
  },
];

const router = createBrowserRouter(routes);

export default router;
