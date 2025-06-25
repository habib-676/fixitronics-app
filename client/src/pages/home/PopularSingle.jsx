import { Link } from "react-router";

const PopularSingle = ({ item }) => {
  const {
    _id,
    imageURL,
    serviceName,
    description,
    price,
    userImage,
    userName,
    email,
  } = item;
  return (
    <div className="rounded-2xl card bg-base-300 text-primary-content shadow-2xl pb-5">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="py-6 pl-6 space-y-7">
          <p className="text-2xl font-semibold">{serviceName}</p>
          <div>
            <p className="text-gray-400 text-sm">{description}</p>
            <p className="text-xl font-extrabold">Price : {price} BDT</p>
          </div>
          <button className="btn-accent btn">
            <Link to={`/services/${_id}`}>View Details</Link>
          </button>
        </div>
        <img src={imageURL} className="w-64 h-full" />
      </div>
      <div className="divide-black divider"></div>

      <p className="text-center my-3 text-2xl">Provider info </p>
      <div className="flex items-center justify-center gap-6 ">
        <img src={userImage} alt="" className="w-16 border-2 rounded-full" />
        <div>
          <p>Name : {userName}</p>
          <p>Email : {email}</p>
        </div>
      </div>
    </div>
  );
};

export default PopularSingle;
