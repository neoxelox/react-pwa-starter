import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Error from "./Error.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  /* The 404 page must be the last route */
  {
    path: "*",
    element: <Error />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
