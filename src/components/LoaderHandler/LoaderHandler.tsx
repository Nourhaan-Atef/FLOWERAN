import loading from "../../assets/Icons/loading.gif";
const LoaderHandler = () => {
  return (
    <div className="flex items-center justify-center mt-52">
      <img src={loading} alt="Loading GIF" className="w-52"/>
    </div>
  );
};

export default LoaderHandler;
