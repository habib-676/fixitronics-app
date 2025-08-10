import React, { useState } from "react";
import { useLoaderData } from "react-router";
import SingleService from "./SingleService";
import { Helmet } from "react-helmet";

const AllServices = () => {
  const services = useLoaderData();
  const [filteredServices, setFilteredServices] = useState(services);

  const handleSearch = (e) => {
    const input = e.target.value;
    const searchedServices = services.filter((ser) =>
      ser.serviceName.toLowerCase().includes(input)
    );
    setFilteredServices(searchedServices);
  };

  return (
    <div className="flex flex-col items-center justify-center my-16 gap-6 text-primary-content">
      <Helmet>
        <title>Our services || Fixitronics</title>
      </Helmet>
      <h3 className="text-3xl font-bold text-center">Our Services </h3>

      {/* search */}
      <label className="input border-primary-content">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          onKeyUp={handleSearch}
          type="search"
          required
          placeholder="Search"
        />
      </label>

      <div>
        {filteredServices.length ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-8">
            {filteredServices.map((service) => (
              <SingleService
                service={service}
                key={service._id}
              ></SingleService>
            ))}
          </div>
        ) : (
          <div>
            <p>No match found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllServices;
