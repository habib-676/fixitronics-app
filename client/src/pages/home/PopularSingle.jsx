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
    <div className="card bg-gradient-to-br from-secondary to-base-300 hover:scale-105 transition-all duration-300 shadow-sm">
      <figure>
        <img src={imageURL} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{serviceName}</h2>
        <p>{description}</p>
        <p className="text-xl font-extrabold">Price : {price} BDT</p>
        <div className="divider"></div>
        <div className="flex items-center justify-center gap-6 ">
          <img src={userImage} alt="" className="w-16 border-2 rounded-full" />
          <div>
            <p>Name : {userName}</p>
            <p>Email : {email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularSingle;
