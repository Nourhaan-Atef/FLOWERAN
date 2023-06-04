import CartItem from "../../components/CartItem/CartItem";
import { CartsState } from "../../slices/cart";
import { useAppSelector } from "../../store/hooks";

const Cart = () => {
  const { cartList } = useAppSelector(CartsState);

  // console.log(cartList);
  return (
    <div>
      <header>
        <h1 className="font-Righteous text-center text-5xl font-extrabold my-10 text-red underline">
          Cart Page
        </h1>
      </header>
      <section className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        {cartList.length === 0 ? (
          <p className="font-merriweather text-2xl font-bold text-red ">
            You Didn't Add Any Flowers Yet ):
          </p>
        ) : (
          <CartItem cartList={cartList} />
        )}
      </section>
    </div>
  );
};

export default Cart;
