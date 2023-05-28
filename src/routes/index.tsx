import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout/RootLayout";
import Home from "../pages/Home/Home";
import "../styles/index.css";
import Flowers from "../pages/Flowers/Flowers";
import FlowerDetails from "../pages/FlowerDetails/FlowerDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "Home",
        element: <Home />,
      },
      {
        path: "Flowers",
        element: <Flowers />,
      },
      {
        path: "Flower/:id/details",
        element: <FlowerDetails />,
      },
    ],
  },
]);
