import { IFlowers } from "../../models/flowers";
import LikeIcon from "../../assets/Icons/heart.svg";
import LoveIcon from "../../assets/Icons/Love.svg";
import OpenIcon from "../../assets/Icons/open.svg";
import flower from "../../assets/Images/flower.jpg";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getCertainFlower } from "../../middlewares/GetCertainFlower";
import {
  FlowersState,
  addToFavorite,
  removeFromFavorite,
} from "../../slices/flowers";
import {
  incrementItemCount,
  decrementItemCount,
  removeFromCart,
} from "../../slices/cart";
interface Props {
  cartList: IFlowers[];
}
const CartItem: React.FC<Props> = ({ cartList }) => {
  const navigate = useNavigate();
  const { FavFlowers } = useAppSelector(FlowersState);

  const dispatch = useAppDispatch();
  const HandleRemoveFromCart = (item: IFlowers) => {
    dispatch(removeFromCart({ cartItem: item }));
  };
  const HandleFavoriteFlowers = (item: IFlowers) => {
    let FavFlowersIds = FavFlowers.map((favFlower) => {
      return favFlower.index;
    });
    if (!FavFlowersIds.includes(item.index)) {
      dispatch(addToFavorite({ FavFlower: item }));
    } else {
      dispatch(removeFromFavorite({ FavFlower: item }));
    }
  };

  const IncrementItemCount = (cartItem: IFlowers) => {
    dispatch(incrementItemCount({ cartItem }));

  };
  const DecrementItemCount = (cartItem: IFlowers) => {
    dispatch(decrementItemCount({ cartItem }));
    if (cartItem.itemCount === 0) {
      dispatch(removeFromCart({ cartItem }));
    }
  };
  return (
    <>
      {cartList.map((flowerCardItem) => {
        return (
          <div
            key={flowerCardItem.index}
            className="flex flex-col  border-2 border-red rounded-3xl py-5 px-5"
          >
            <div className="flex justify-between items-center gap-3 cursor-pointer">
              <div className="flex justify-between items-center gap-5">
                <button
                  className="px-4 py-px rounded-xl border border-red text-red font-bold text-xl"
                  onClick={() => IncrementItemCount(flowerCardItem)}
                >
                  +
                </button>
                <p className="text-red">{flowerCardItem?.itemCount}</p>
                <button
                  className="px-4 py-px rounded-xl border border-red text-red font-bold text-xl"
                  onClick={() => DecrementItemCount(flowerCardItem)}
                >
                  -
                </button>
              </div>
              <div className="flex gap-5">
                <img
                  src={OpenIcon}
                  alt="Open Icon"
                  className="w-5"
                  onClick={() => {
                    dispatch(
                      getCertainFlower({ id: flowerCardItem.index })
                    ).then((res) => {
                      if (res.meta.requestStatus === "fulfilled") {
                        navigate(`/Flower/${flowerCardItem.index}/details`);
                      }
                    });
                  }}
                />
                <img
                  src={`${
                    FavFlowers.map((favFlower) => {
                      return favFlower.index;
                    }).includes(flowerCardItem.index)
                      ? LoveIcon
                      : LikeIcon
                  }`}
                  alt="Like Icon"
                  className="w-5"
                  onClick={() => HandleFavoriteFlowers(flowerCardItem)}
                />
              </div>
            </div>
            <div className="py-5">
              <img
                src={flower}
                alt="Flower Img"
                className="w-full rounded-3xl"
              />
            </div>
            <p className="text-center font-Righteous text-xl pb-5">
              {flowerCardItem.flower_name}
            </p>
            <div className="flex items-center justify-center">
              <button
                className="border-2 border-green-700 hover:bg-green-700 hover:text-white transition duration-200 rounded-lg text-center text-lg font-bold font-Skranji px-10 py-px text-green-700"
                onClick={() => HandleRemoveFromCart(flowerCardItem)}
              >
                Remove From Cart
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CartItem;
