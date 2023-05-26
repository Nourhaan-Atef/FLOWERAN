import { Link } from "react-router-dom";
import home from "../../assets/Images/nikita-tikhomirov-dv7cSiHurKM-unsplash.jpg";
const Home = () => {
  return (
    <>
      <section className="grid md:grid-cols-3 items-center mt-5 gap-5 pb-10">
        <div className=" font-Righteous md:order-1 order-2">
          <p className="py-5 font-Righteous text-3xl uppercase font-extrabold">
            Welcome to our store ❤
          </p>
          <p className="text-2xl">Send fresh Flowers Online on the same day.</p>
          <Link to="/Flowers">
            <button className="bg-red-700 px-8 py-1 text-white text-xl rounded-2xl mt-10 border-2 border-white hover:border-red-700 hover:bg-white hover:text-red-700">
              Shop Now
            </button>
          </Link>
        </div>
        <img
          src={home}
          alt="Home Img"
          className="md:col-span-2 md:order-2 order-1 rounded-2xl w-full md:h-[82vh]"
        />
      </section>
    </>
  );
};

export default Home;
