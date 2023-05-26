import { useState } from "react";
import cart from "../../assets/Icons/cart.svg";
import heart from "../../assets/Icons/heart.svg";
import close from "../../assets/Icons/close.svg";
import menu from "../../assets/Icons/menu.svg";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [closeMenu, setCloseMenu] = useState(false);
  return (
    <>
      <section className="flex justify-between items-center py-5">
        <Link to="/Home">
          <h2 className="font-Skranji font-extrabold text-3xl uppercase">
            floweran
          </h2>
        </Link>

        <div className="md:flex hidden items-center gap-10 cursor-pointer">
          <NavLink to="Home">
            <p className="font-Righteous font-semibold text-xl uppercase">
              home
            </p>
          </NavLink>
          <NavLink to="Flowers">
            <p className="font-Righteous font-semibold text-xl uppercase">
              flowers
            </p>
          </NavLink>
          <div>
            <img src={heart} alt="Like Iocn" className="w-6" />
          </div>
          <div>
            <img src={cart} alt="Cart Iocn" className="w-6" />
          </div>
        </div>
        <div className="md:hidden flex">
          <img
            src={`${closeMenu ? close : menu}`}
            alt="Menu and Close Icon"
            className="w-12 cursor-pointer"
            onClick={() => setCloseMenu(!closeMenu)}
          />
        </div>
      </section>
      {closeMenu ? (
        <div className="md:hidden flex flex-col items-center gap-5 pb-3 cursor-pointer transition-all ease-in duration-500">
          <NavLink to="Home">
            <p className="font-Righteous font-semibold text-xl uppercase">
              home
            </p>
          </NavLink>
          <NavLink to="Flowers">
            <p className="font-Righteous font-semibold text-xl uppercase">
              flowers
            </p>
          </NavLink>
          <div className="flex items-center gap-10">
            <div>
              <img src={heart} alt="Like Iocn" className="w-8" />
            </div>
            <div>
              <img src={cart} alt="Cart Iocn" className="w-8" />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default NavBar;  
