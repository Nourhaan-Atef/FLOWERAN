import NavBar from "../../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <div className="md:mx-16 mx-8">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
