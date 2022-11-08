import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {Initial} from "./screens/Initial";

const router = createBrowserRouter(
  [
    {
      element: <Initial/>,
      path: "/"
    }
  ]
);

function Application() {
  return <RouterProvider router={router}/>;
}

export default Application;
