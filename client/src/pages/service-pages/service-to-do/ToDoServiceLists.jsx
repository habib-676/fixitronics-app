import axios from "axios";
import React, { use } from "react";
import { Link } from "react-router";

const ToDoServiceLists = ({ myBookedServicesPromise }) => {
  const services = use(myBookedServicesPromise);

  const handleStatus = (e, id) => {
    e.preventDefault();

    const status = e.target.serviceStatus.value;

    const serviceStatus = {
      status,
    };

    axios
      .patch(`${import.meta.env.VITE_hostUrl}/orders/${id}`, serviceStatus)
      .then((res) => console.log(res.data));
  };

  return services.length ? (
    <div className="my-16">
      <h3 className="font-black text-3xl text-center">
        Your Booked Services :
      </h3>
      <div>
        {services.map((service) => (
          <div
            key={service._id}
            className="rounded-xl p-5 bg-base-300 my-14 flex  items-center justify-around"
          >
            {/* others */}
            <div className=" space-y-10">
              {/* customer */}
              <div className="flex items-center justify-center gap-2">
                <div className="w-16 rounded-full ring-accent border avatar ">
                  <img
                    src={service.providerImg}
                    className="w-20 rounded-full "
                  />
                </div>
                <div>
                  <p>Name : {service.customerName}</p>
                  <p>Email : {service.customerEmail}</p>
                  <p>Location : {service.area}</p>
                </div>
              </div>

              {/* service related info */}
              <div>
                <h3 className="font-bold text-3xl">{service.serviceName}</h3>
                <p>{service.description}</p>
                <p>Price : {service.price}</p>
              </div>

              {/*  */}
              <form
                onSubmit={(e) => handleStatus(e, service._id)}
                className="fieldset bg-base-200  border-base-300 rounded-box w-xs border p-4"
              >
                <legend className="fieldset-legend text-primary-content">
                  service status
                </legend>
                <label className="fieldset-label text-secondary-content">
                  Currently : {service.serviceStatus}
                </label>
                <select
                  defaultValue={service.serviceStatus}
                  name="serviceStatus"
                  className="select select-neutral"
                >
                  <option disabled={true}>
                    Current status : {service.serviceStatus}
                  </option>
                  <option value={"pending"}>Pending</option>
                  <option value={"working"}>Working</option>
                  <option value={"completed"}>Completed</option>
                </select>

                <input
                  type="submit"
                  value="Update"
                  className="btn btn-accent mt-5"
                />
              </form>
            </div>
            <div className="w-1/3 aspect-square rounded-full overflow-hidden">
              <img
                src={service.serviceImg}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="flex flex-col gap-5 items-center justify-center h-[80vh]">
      <h3 className="text-5xl font-black">
        You don't have <span className="text-accent">any services</span> to
        handle
      </h3>
      <Link className="btn btn-accent" to={"/"}>
        Return to Home
      </Link>
    </div>
  );
};

export default ToDoServiceLists;
