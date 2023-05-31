import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout/RootLayout";
import Home from "../pages/Home/Home";
import "../styles/index.css";
import Flowers from "../pages/Flowers/Flowers";
import FlowerDetails from "../pages/FlowerDetails/FlowerDetails";
import FavFlowers from "../pages/FavFlowers/FavFlowers";
import Cart from "../pages/Cart/Cart";

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
      {
        path: "Favorites",
        element: <FavFlowers />,
      },
      {
        path: "Cart",
        element: <Cart />,
      },
    ],
  },
]);
