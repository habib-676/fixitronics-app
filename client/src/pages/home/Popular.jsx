import { Link, useLoaderData } from "react-router";
import PopularSingle from "./PopularSingle";

const Popular = () => {
  const data = useLoaderData();

  return (
    <div className="my-7 flex flex-col items-center text-primary-content justify-center gap-6">
      <h3 className="text-2xl font-bold ">Our Popular Services </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mt-8">
        {data.map((item) => (
          <PopularSingle item={item} key={item._id}></PopularSingle>
        ))}
      </div>
      <button className="btn btn-primary ">
        <Link to={"/services"}>Show all</Link>
      </button>
    </div>
  );
};

export default Popular;
