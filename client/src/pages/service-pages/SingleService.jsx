import { Link } from "react-router";
import { FaLocationDot } from "react-icons/fa6";

const SingleService = ({ service }) => {
  const {
    _id,
    imageURL,
    serviceName,
    description,
    price,
    area,
    userImage,
    userName,
    email,
  } = service;

  return (
    <div className="group relative max-w-sm bg-base-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-base-300 text-primary-content transition-all duration-300">
      {/* Product Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={imageURL}
          alt={serviceName}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        {/* Price Tag */}
        <div className="absolute bottom-3 right-3 bg-base-100/90 backdrop-blur-md text-secondary-content font-bold text-sm px-3 py-1 rounded-full shadow-lg">
          {price} BDT
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* Title */}
        <h2 className="text-lg font-bold group-hover:text-primary transition-colors">
          {serviceName}
        </h2>

        {/* Description */}
        <p className="text-secondary-content text-sm mt-1 line-clamp-2">
          {description}
        </p>

        {/* Location */}
        <div className="flex items-center gap-1 mt-2 text-sm text-secondary-content">
          <FaLocationDot className="text-primary" />
          <span>{area}</span>
        </div>

        {/* Seller Card */}
        <div className="mt-5 p-3 rounded-2xl bg-base-100 shadow-inner border border-base-300 flex items-center gap-3">
          <img
            src={userImage}
            alt={userName}
            className="w-12 h-12 rounded-full object-cover border-2 border-primary"
          />
          <div className="text-sm">
            <p className="font-semibold text-primary">{userName}</p>
            <p className="text-secondary-content">{email}</p>
          </div>
        </div>

        {/* Button */}
        <Link
          to={`/services/${_id}`}
          className="mt-5 block w-full text-center bg-gradient-to-r from-primary to-accent text-primary-content font-medium py-2 rounded-xl hover:from-accent hover:to-primary transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default SingleService;
