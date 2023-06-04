import flower from "../../assets/Images/flower.jpg";
import { incrementItemCount } from "../../slices/cart";
import { IFlowers } from "../../models/flowers";
import { useAppDispatch } from "../../store/hooks";
import { useState } from "react";
interface Props {
  Flower: IFlowers | null;
}
const FlowersQuantity: React.FC<Props> = ({ Flower }) => {
  console.log(Flower?.itemCount);
  const dispatch = useAppDispatch();

  const [buyFlower, setBuyFlower] = useState<IFlowers>({
    flower_description: Flower?.flower_description ?? "",
    flower_name: Flower?.flower_name ?? "",
    index: Flower?.index ?? 0,
    itemCount: 0,
    flower_picture: Flower?.flower_picture ?? "",
  });

  const IncrementItemCount = (item: IFlowers) => {
    dispatch(incrementItemCount({ cartItem: item }));
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.8)]">
      <header>
        <h1 className="font-Righteous text-center text-5xl font-extrabold my-10 text-red underline">
          Flower Quantity
        </h1>
      </header>
      <section className="flex flex-col items-center justify-center">
        <img
          src={flower}
          alt="Flower"
          className="w-96 rounded-3xl border-2 border-white"
        />
      
      </section>
    </div>
  );
};

export default FlowersQuantity;
