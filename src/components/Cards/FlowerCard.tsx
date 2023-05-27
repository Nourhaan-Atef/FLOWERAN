import { IFlowers } from "../../models/flowers";
import LikeIcon from "../../assets/Icons/heart.svg";
import CommentIcon from "../../assets/Icons/comment.svg";
import OpenIcon from "../../assets/Icons/open.svg";

interface Props {
  flowersList: IFlowers[];
}
const FlowerCard: React.FC<Props> = ({ flowersList }) => {
  return (
    <>
      {flowersList.map((flowerCardItem) => {
        return (
          <div
            key={flowerCardItem.index}
            className="flex flex-col  border-2 border-red rounded-3xl py-5 px-5"
          >
            <div className="flex justify-end items-center gap-3 cursor-pointer">
              <img src={OpenIcon} alt="Open Icon" className="w-5" />
              <img src={LikeIcon} alt="Like Icon" className="w-5" />
              <img src={CommentIcon} alt="Comment Icon" className="w-5" />
            </div>
            {/* <img src={flowerCardItem.flower_picture} alt="Flower Img" /> */}
            <p className="text-center font-Righteous text-xl pb-5">
              {flowerCardItem.flower_name}
            </p>
            <div className="flex items-center justify-center ">
              <button className="border-2 border-green-700 hover:bg-green-700 hover:text-white transition duration-200 rounded-lg text-center text-lg font-bold font-Skranji px-10 py-px text-green-700  ">
                Add To Cart
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FlowerCard;
