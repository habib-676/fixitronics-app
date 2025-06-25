import React, { use, useEffect, useState } from "react";
import MyServiceInfo from "./MyServiceInfo";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyServiceLists = ({ myServicesPromise }) => {
  const services = use(myServicesPromise);

  const [myData, setMyData] = useState(services);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    if (selectedService) {
      const modal = document.getElementById("update_modal");
      if (modal) {
        modal.showModal();
      }
    }
  }, [selectedService]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedServiceData = Object.fromEntries(formData.entries());

    axios
      .put(
        `${import.meta.env.VITE_hostUrl}/services/${selectedService._id}`,
        updatedServiceData
      )
      .then((res) => {
        //  Update local state
        const updatedList = myData.map((item) =>
          item._id === selectedService._id
            ? { ...item, ...updatedServiceData }
            : item
        );
        setMyData(updatedList);

        if (res.data.modifiedCount) {
          Swal.fire({
            title: "Updated",
            icon: "success",
            draggable: true,
          });
        }
      });
  };

  return services.length ? (
    <div className="my-16">
      <h3 className="font-bold text-center text-3xl mb-5">
        My <span className="text-primary">added</span> services :{" "}
      </h3>
      <div className="overflow-x-auto">
        <table className="table bg-base-200">
          <thead className="text-secondary-content">
            <tr>
              <th>No.</th>
              <th>Service Name</th>
              <th>
                Price <span className="text-xs font-normal">(BDT)</span>
              </th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            {myData.map((service, index) => (
              <MyServiceInfo
                service={service}
                key={service._id}
                index={index}
                myData={myData}
                setMyData={setMyData}
                setSelectedService={setSelectedService}
              ></MyServiceInfo>
            ))}
          </tbody>
        </table>
        {selectedService && (
          <div>
            <dialog
              id="update_modal"
              className="modal"
              key={selectedService._id}
            >
              <div className="modal-box card-body bg-base-100 shadow-2xl">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <form
                  onSubmit={(e) => handleUpdate(e, selectedService._id)}
                  className="fieldset"
                >
                  {/*  */}
                  <label className="label">Service name </label>
                  <input
                    type="text"
                    name="serviceName"
                    className="input border-accent-content "
                    defaultValue={selectedService.serviceName}
                  />

                  {/*  */}
                  <label className="label">Price </label>
                  <input
                    type="number"
                    name="price"
                    className="input border border-accent-content"
                    defaultValue={selectedService.price}
                  />

                  <label className="label">Service Area </label>
                  <input
                    type="text"
                    name="area"
                    className="input border border-accent-content"
                    defaultValue={selectedService.area}
                  />
                  {/*  */}
                  <label className="label">Description</label>
                  <input
                    type="text"
                    name="description"
                    className="input border border-accent-content"
                    defaultValue={selectedService.description}
                  />

                  {/*  */}
                  <label className="label">Image</label>
                  <input
                    type="url"
                    name="imageURL"
                    className="input border border-accent-content"
                    defaultValue={selectedService.imageURL}
                  />

                  <input
                    type="submit"
                    value="Submit"
                    className="btn btn-primary"
                  />
                </form>
              </div>
            </dialog>
          </div>
        )}
      </div>
    </div>
  ) : (
    <div className="flex flex-col gap-5 items-center justify-center h-[80vh]">
      <h3 className="text-5xl font-black">
        You haven't add <span className="text-accent">any services</span> yet
      </h3>
      <Link className="btn btn-accent" to={"/add-service"}>
        Add a service
      </Link>
    </div>
  );
};

export default MyServiceLists;
