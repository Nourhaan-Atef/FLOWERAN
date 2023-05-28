import React from "react";
import { useAppSelector } from "../../store/hooks";
import { FlowersState } from "../../slices/flowers";
import flower from "../../assets/Images/flower.jpg";
import { Link } from "react-router-dom";

const FlowerDetails = () => {
  const { Flower } = useAppSelector(FlowersState);
  return (
    <div>
      <header>
        <h1 className="font-Righteous text-center text-5xl font-extrabold my-10 text-red underline">
          Flower Details Page
        </h1>
      </header>
      <Link to="/Flowers">
        <button className="border-2 border-green-700 hover:bg-green-700 hover:text-white transition duration-200 rounded-lg text-center text-lg font-bold font-Skranji px-10 py-2 text-green-700">
          Back To Flowers
        </button>
      </Link>
      <section className="grid grid-cols-2 items-center mt-5">
        <div>
          <p className="text-center font-Righteous text-xl pb-5">
            <span className="text-2xl text-red font-Skranji">Name :</span>{" "}
            {Flower?.flower_name}
          </p>
          <p className="text-center font-Righteous text-xl pb-5">
            <span className="text-2xl text-red font-Skranji">
              Desctiption :
            </span>{" "}
            {Flower?.flower_description}
          </p>
        </div>
        <div className="flex items-center justify-center ">
          <img
            src={flower}
            alt="Flower Img"
            className="w-fit h-96 rounded-3xl"
          />
        </div>
      </section>
    </div>
  );
};

export default FlowerDetails;
