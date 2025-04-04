import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Default } from "./pages/Default/Default";
import { Timeline } from "./pages/Timeline/Timeline";
import { Tweets } from "./pages/Tweets/Tweets";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    children: [
      {
        path: "/",
        element: <Timeline />,
      },
      {
        path: "/tweet",
        element: <Tweets />,
      },
    ],
  },
]);

export const Routes = () => {
  return <RouterProvider router={Router} />;
};
