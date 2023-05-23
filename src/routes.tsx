import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from "./App.tsx";
import Error from "./Error.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />} />
      {/* The 404 page must be the last route */}
      <Route path="*" element={<Error />} />
    </Route>,
  ),
);

export default function Router() {
  return <RouterProvider router={router} />;
}
