import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout/RootLayout";
import Home from "../pages/Home/Home";
import "../styles/index.css";
import Flowers from "../pages/Flowers/Flowers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "Home",
        element: <Home />,
      },
      {
        path: "Flowers",
        element: <Flowers />,
      },
    ],
  },
]);
