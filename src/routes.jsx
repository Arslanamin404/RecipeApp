import { RootLayout } from "./RootLayout/RootLayout";
import { Home } from "./components/Home";
import { Favorites } from "./components/Favorites";
import { Details } from "./components/Details";
import { PageNotFound } from "./components/PageNotFound";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "recipe-item/:id",
        element: <Details />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

export default router;
