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
    <div className="group relative max-w-sm bg-base-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-base-300 hover:scale-105">
      
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageURL}
          alt={serviceName}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
        <span className="absolute top-3 right-3 bg-primary text-primary-content text-xs px-3 py-1 rounded-full shadow-md">
          {price} BDT
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="text-lg font-bold text-primary group-hover:text-secondary transition-colors">
          {serviceName}
        </h2>
        <p className="text-secondary-content text-sm mt-1 line-clamp-2">
          {description}
        </p>

        {/* Divider */}
        <div className="my-4 border-t border-base-300"></div>

        {/* Provider Info */}
        <div className="flex items-center gap-3">
          <img
            src={userImage}
            alt={userName}
            className="w-12 h-12 rounded-full object-cover border-2 border-secondary"
          />
          <div className="text-sm">
            <p className="font-semibold text-primary">{userName}</p>
            <p className="text-secondary-content">{email}</p>
          </div>
        </div>

        {/* View Details Button */}
        <Link
          to={`/services/${_id}`}
          className="mt-5 block text-center bg-gradient-to-r from-primary to-secondary text-primary-content font-medium py-2 rounded-xl hover:from-secondary hover:to-primary transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PopularSingle;
