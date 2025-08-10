import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import SingleService from "./SingleService";
import { Helmet } from "react-helmet";

const AllServices = () => {
  const services = useLoaderData();

  // States for search input and sorting order
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const [displayServices, setDisplayServices] = useState(services);

  useEffect(() => {
    let filtered = services.filter((ser) =>
      ser.serviceName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort filtered list by price if sortOrder is set
    if (sortOrder === "asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setDisplayServices(filtered);
  }, [searchTerm, sortOrder, services]);

  return (
    <div className="flex flex-col items-center justify-center my-16 gap-6 text-primary-content max-w-7xl mx-auto px-4">
      <Helmet>
        <title>Our services || Fixitronics</title>
      </Helmet>

      <h3 className="text-3xl font-bold text-center">Our Services</h3>

      <div className="flex flex-col md:flex-row items-center gap-4 w-full max-w-md">
        {/* Search */}
        <label className="flex items-center w-full border border-primary-content rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-primary transition">
          <svg
            className="h-5 w-5 opacity-50 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="search"
            placeholder="Search services"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent outline-none w-full text-primary-content placeholder:text-primary-content/70"
          />
        </label>

        {/* Sort dropdown */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="w-full md:w-48 px-3 py-2 border border-primary-content rounded-md bg-base-200 text-primary-content cursor-pointer focus:ring-2 focus:ring-primary transition"
          aria-label="Sort services by price"
        >
          <option value="">Sort by price</option>
          <option value="asc">Price: Low to High ↑</option>
          <option value="desc">Price: High to Low ↓</option>
        </select>
      </div>

      {/* Services grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-8 w-full max-w-7xl">
        {displayServices.length ? (
          displayServices.map((service) => (
            <SingleService service={service} key={service._id} />
          ))
        ) : (
          <p className="text-center col-span-full text-secondary-content">
            No match found
          </p>
        )}
      </div>
    </div>
  );
};

export default AllServices;
