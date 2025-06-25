import React from "react";
import { FaLocationPin } from "react-icons/fa6";
import { Link } from "react-router";

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
    <div className="card md:w-2xl bg-base-200 border shadow-2xl py-5">
      <div className="flex flex-col  items-start md:items-center justify-between">
        <img src={imageURL} className="px-5 w-sm md:max-w-xl h-full" />
        <div className="py-6 pl-6 space-y-7 ">
          <p className="text-2xl font-semibold ">{serviceName}</p>
          <div className="space-y-2">
            <p className="text-secondary-content text-sm">{description}</p>
            <p className="flex items-center gap-1">
              <span>
                <FaLocationPin />
              </span>
              <span className=" text-sm">{area}</span>
            </p>
            <p className="text-xl font-extrabold">Price : {price} BDT</p>
          </div>
          <button className="btn-secondary btn">
            <Link to={`/services/${_id}`}>View details</Link>
          </button>
        </div>
      </div>
      <div className="border-t border-dashed mx-6"></div>
      <p className="text-center my-3 text-2xl">Provider info </p>
      <div className="flex items-center justify-center gap-6">
        <img src={userImage} alt="" className="w-16 border-2 rounded-full" />
        <div>
          <p>Name : {userName}</p>
          <p>Email : {email}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
