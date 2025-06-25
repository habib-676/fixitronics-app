import React, { use } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
const ServiceDetails = () => {
  const { user } = use(AuthContext);

  const service = useLoaderData();
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

  const handlePurchase = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newOrder = Object.fromEntries(formData.entries());
    newOrder.serviceStatus = "pending";
    newOrder.area = area;
    newOrder.providerImg = userImage;

    axios
      .post(`${import.meta.env.VITE_hostUrl}/orders`, newOrder)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "You have Purchased this Service !",
            icon: "success",
            draggable: true,
          });
          form.reset();
        }
      })
      .catch((error) => {
        const msg = error.message;
        const errCode = error.code;
        Swal.fire({
          title: `Status code ${errCode} "${msg}"`,
          icon: "error",
          draggable: true,
        });
      });
  };

  const handleBookBtn = () => {
    document.getElementById("my_modal").showModal();
  };
  return (
    <div className="rounded-xl p-5 bg-base-300 text-primary-content my-14 flex  items-center justify-around">
      <Helmet>
        <title>
          {serviceName} - Affordable & Trusted Service | Fixitronics
        </title>
      </Helmet>
      {/* others */}
      <div className=" space-y-10">
        {/* provider */}
        <div className="flex items-center justify-center gap-2">
          <div className="w-16 rounded-full ring-accent border avatar ">
            <img src={userImage} className="w-20 rounded-full " />
          </div>
          <div>
            <p>Name : {userName}</p>
            <p>Email : {email}</p>
            <p>Location : {area}</p>
          </div>
        </div>

        {/* service related info */}
        <div>
          <h3 className="font-bold text-3xl">{serviceName}</h3>
          <p>{description}</p>
          <p>Price : {price}</p>
        </div>

        <button className="btn btn-accent" onClick={handleBookBtn}>
          Book Now
        </button>
      </div>
      <div className="w-1/3 aspect-square rounded-full overflow-hidden">
        <img src={imageURL} className="w-full h-full object-cover" />
      </div>
      {/* modal */}
      <dialog id="my_modal" className="modal ">
        <div className="modal-box card-body bg-base-100 text-primary-content shadow-2xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form onSubmit={handlePurchase} className="fieldset">
            {/* ID */}
            <label className="label">Service Id : </label>
            <input
              type="text"
              name="serviceId"
              className="input border-accent-content "
              defaultValue={_id}
              readOnly
            />

            {/* name */}
            <label className="label">Service Name : </label>
            <input
              type="text"
              name="serviceName"
              className="input border-accent-content "
              defaultValue={serviceName}
              readOnly
            />

            {/* image */}
            <label className="label">Service Image : </label>
            <input
              type="url"
              name="serviceImg"
              className="input border-accent-content "
              defaultValue={imageURL}
              readOnly
            />

            {/* price */}
            <label className="label">Service Price : </label>
            <input
              type="number"
              name="price"
              className="input border-accent-content "
              defaultValue={price}
              readOnly
            />

            <fieldset className="flex items-center gap-3 fieldset w-full bg-base-200 border-base-300 rounded-box  border p-4">
              <legend className="fieldset-legend text-primary-content">
                Provider details
              </legend>
              {/* Provider email */}
              <div>
                <label className="label">Provider Email : </label>
                <input
                  type="email"
                  name="providerEmail"
                  className="input border-accent-content "
                  defaultValue={email}
                  readOnly
                />
              </div>
              {/* Provider name */}
              <div>
                <label className="label">Provider name : </label>
                <input
                  type="name"
                  name="providerName"
                  className="input border-accent-content "
                  defaultValue={userName}
                  readOnly
                />
              </div>
            </fieldset>

            <fieldset className="flex items-center gap-3 fieldset w-full bg-base-200 border-base-300 rounded-box  border p-4">
              <legend className="fieldset-legend text-primary-content">
                Your details
              </legend>
              {/*Your name*/}
              <div>
                <label className="label">User name : </label>
                <input
                  type="text"
                  name="customerName"
                  className="input border-accent-content "
                  defaultValue={user.displayName}
                  readOnly
                />
              </div>

              {/*Your name*/}
              <div>
                <label className="label">User email : </label>
                <input
                  type="email"
                  name="customerEmail"
                  className="input border-accent-content "
                  defaultValue={user.email}
                  readOnly
                />
              </div>
            </fieldset>

            {/*date*/}
            <label className="label">Service taking Date</label>
            <input
              type="date"
              name="date"
              className="input border-accent-content "
              required
            />

            {/*instruction*/}
            <label className="label">Special instruction </label>
            <input
              type="text"
              name="instruction"
              className="input border-accent-content w-full"
              placeholder="Anything like address , area, customized service plan"
              required
            />

            <input
              type="submit"
              value="Purchase"
              className="btn btn-primary "
            />
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ServiceDetails;
