import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout/RootLayout";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);
