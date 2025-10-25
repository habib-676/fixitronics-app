import React, { use } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AddService = () => {
  const { user } = use(AuthContext);
  const axiosSecure = useAxiosSecure();

  console.log(user);
  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newService = Object.fromEntries(formData.entries());

    // user related info
    newService.email = user.email;
    newService.userName = user.displayName;
    newService.userImage = user.photoURL;

    axiosSecure
      .post(
        `${import.meta.env.VITE_hostUrl}/addService?email=${user.email}`,
        newService
      )
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "You have shared a new Service !",
            icon: "success",
            draggable: true,
          });
          form.reset();
        }
      })
      .catch((err) => {
        const message = err.message;
        const code = err.code;
        Swal.fire({
          title: `error ${code} , ${message}`,
          icon: "error",
          draggable: true,
        });
      });
  };

  return (
    <div className="card bg-base-200 text-primary-content border-accent border my-10 mx-auto max-w-sm shrink-0 shadow-2xl">
      <Helmet>
        <title>Add a service || Fixitronics</title>
      </Helmet>
      <div className="card-body">
        <form className="fieldset" onSubmit={handleAddService}>
          {/*  */}
          <label className="label">Service Name </label>
          <input
            type="text"
            name="serviceName"
            className="input border border-accent-content"
            placeholder="Service name (e.g., “Laptop & Desktop Repair”)"
            required
          />

          {/*  */}
          <label className="label">Price </label>
          <input
            type="number"
            name="price"
            className="input border border-accent-content"
            placeholder="Enter the price"
            required
          />

          {/*  */}
          <label className="label">Service Area </label>
          <input
            type="text"
            name="area"
            className="input border border-accent-content"
            placeholder="Service Area (e.g., “Chandpur”)"
            required
          />

          {/*  */}
          <label className="label">Description</label>
          <input
            type="text"
            name="description"
            className="input border border-accent-content"
            placeholder="Description about your service"
            required
          />

          {/*  */}
          <label className="label">Image</label>
          <input
            type="url"
            name="imageURL"
            className="input border border-accent-content"
            placeholder="Image about your service"
            required
          />

          {/*  */}
          <input
            type="submit"
            value="Submit"
            className="btn btn-primary mt-6"
          />
        </form>
      </div>
    </div>
  );
};

export default AddService;
