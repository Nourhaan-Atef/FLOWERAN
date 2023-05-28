import FlowerCard from "../../components/Cards/FlowerCard";
import { FlowersState } from "../../slices/flowers";
import { useAppSelector } from "../../store/hooks";

const FavFlowers = () => {
  const { FavFlowers } = useAppSelector(FlowersState);
  return (
    <div className="mb-10">
      <header>
        <h1 className="font-Righteous text-center text-5xl font-extrabold my-10 text-red underline">
          Favorite Flowers
        </h1>
      </header>
      {FavFlowers.length === 0 ? (
        <p className="font-merriweather text-2xl font-bold  mt-20 text-red ">
          No Favorite Flowers Available ):
        </p>
      ) : (
        <section className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
          <FlowerCard flowersList={FavFlowers} />
        </section>
      )}
    </div>
  );
};

export default FavFlowers;
