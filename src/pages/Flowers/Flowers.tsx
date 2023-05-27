import { useEffect, useState } from "react";
import { FlowersState } from "../../slices/flowers";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchAllFlowers } from "../../middlewares/FetchAllFlowers";
import FlowerCard from "../../components/Cards/FlowerCard";
import LoaderHandler from "../../components/LoaderHandler/LoaderHandler";
import { IFlowers } from "../../models/flowers";

const Flowers = () => {
  const dispatch = useAppDispatch();
  const { flowerList, loading } = useAppSelector(FlowersState);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(fetchAllFlowers());
  }, [dispatch]);

  if (loading) {
    return <LoaderHandler />;
  }

  const HandleSearchQuery = (flowerList: IFlowers[]) => {
    return flowerList.filter((item) =>
      item.flower_name.toLocaleLowerCase().includes(searchQuery)
    );
  };

  return (
    <>
      <header>
        <h1 className="font-Righteous text-center text-5xl font-extrabold my-10 text-red underline">
          Flowers Page
        </h1>
      </header>
      <div>
        <input
          type="search"
          placeholder="Search About Your Flower....."
          className="outline-none border-2 border-green-700 font-Righteous rounded-3xl px-5 md:py-3 py-2 md:w-[600px] w-full my-5"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <section className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        <FlowerCard flowersList={HandleSearchQuery(flowerList)} />
      </section>
    </>
  );
};

export default Flowers;
