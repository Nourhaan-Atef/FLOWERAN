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
import { CartsState, addToCart } from "../../slices/cart";

interface Props {
  flowersList: IFlowers[];
}
const FlowerCard: React.FC<Props> = ({ flowersList }) => {
  const { cartList } = useAppSelector(CartsState);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { FavFlowers } = useAppSelector(FlowersState);
  const HandleAddToCart = (item: IFlowers) => {
    const myFlower = cartList.filter((flower) => {
      return flower.index === item.index;
    });
    if (myFlower.length === 0) {
      dispatch(addToCart({ cartItem: { ...item, itemCount: 1 } }));
    }
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
  return (
    <>
      {flowersList.map((flowerCardItem) => {
        return (
          <div
            key={flowerCardItem.index}
            className="flex flex-col  border-2 border-red rounded-3xl py-5 px-5"
          >
            <div className="flex justify-end items-center gap-3 cursor-pointer">
              <img
                src={OpenIcon}
                alt="Open Icon"
                className="w-5"
                onClick={() => {
                  dispatch(getCertainFlower({ id: flowerCardItem.index })).then(
                    (res) => {
                      if (res.meta.requestStatus === "fulfilled") {
                        navigate(`/Flower/${flowerCardItem.index}/details`);
                      }
                    }
                  );
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
                onClick={() => {
                  HandleAddToCart(flowerCardItem);
                }}
              >
                Buy Flower
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FlowerCard;
