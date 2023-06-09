import { useState } from "react";
import cart from "../../assets/Icons/cart.svg";
import heart from "../../assets/Icons/heart.svg";
import close from "../../assets/Icons/close.svg";
import menu from "../../assets/Icons/menu.svg";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { CartsState } from "../../slices/cart";
import { FlowersState } from "../../slices/flowers";

const NavBar = () => {
  const [closeMenu, setCloseMenu] = useState(false);
  const { cartCounter } = useAppSelector(CartsState);
  const { FavCounter } = useAppSelector(FlowersState);
  return (
    <>
      <section className="flex justify-between items-center py-5 sticky top-0 bg-white border-b border-gray-500">
        <Link to="/Home">
          <h2 className="font-Skranji font-extrabold text-3xl uppercase">
            floweran
          </h2>
        </Link>

        <div className="md:flex hidden items-center gap-10 cursor-pointer">
          <NavLink to="Home" className="link">
            <p className="font-Righteous font-semibold text-xl uppercase">
              home
            </p>
          </NavLink>
          <NavLink to="Flowers" className="link">
            <p className="font-Righteous font-semibold text-xl uppercase">
              flowers
            </p>
          </NavLink>

          <NavLink to="Favorites" className="link relative">
            <div className="absolute -top-3 -right-3 w-5 h-6 text-center rounded-full bg-red text-white">
              {FavCounter}
            </div>
            <img src={heart} alt="Like Iocn" className="w-6" />
          </NavLink>
          <Link to="Cart" className="link ">
            <div className="absolute top-3 -right-2 w-5 h-6 text-center rounded-full bg-red text-white">
              {cartCounter}
            </div>
            <img src={cart} alt="Cart Iocn" className="w-6" />
          </Link>
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
        <div className="md:hidden flex flex-col items-center gap-5 pb-3 cursor-pointer transition-all ease-in duration-500 mt-5 ">
          <NavLink to="Home" className="link">
            <p className="font-Righteous font-semibold text-xl uppercase">
              home
            </p>
          </NavLink>
          <NavLink to="Flowers" className="link">
            <p className="font-Righteous font-semibold text-xl uppercase">
              flowers
            </p>
          </NavLink>
          <NavLink to="Favorites" className="link">
            <p className="font-Righteous font-semibold text-xl uppercase">
              favorites
            </p>
          </NavLink>
          <div className="flex items-center gap-10">
            <NavLink to="Favorites" className="link relative">
              <div className="absolute -top-3 -right-2 w-5 h-6 text-center rounded-full bg-red text-white">
                {FavCounter}
              </div>
              <img src={heart} alt="Like Iocn" className="w-8" />
            </NavLink>
            <Link to="Cart" className="link relative">
              <div className="absolute -top-3 right-0 w-5 h-6 text-center rounded-full bg-red text-white">
                {cartCounter}
              </div>
              <img src={cart} alt="Cart Iocn" className="w-8" />
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default NavBar;
