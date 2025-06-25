import axios from "axios";
import React from "react";
import { BiSolidPencil } from "react-icons/bi";
import { FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";

const MyServiceInfo = ({
  service,
  index,
  myData,
  setMyData,
  setSelectedService,
}) => {
  const { _id, imageURL, serviceName, price, area } = service;

  //   const handleUpdate = (e) => {
  //     e.preventDefault();
  //     const form = e.target;
  //     const formData = new FormData(form);
  //     const updatedServiceData = Object.fromEntries(formData.entries());

  //     axios
  //       .put(
  //         `${import.meta.env.VITE_hostUrl}/services/${_id}`,
  //         updatedServiceData
  //       )
  //       .then((res) => {
  //         if (res.data.modifiedCount) {
  //           Swal.fire({
  //             title: "Updated",
  //             icon: "success",
  //             draggable: true,
  //           });
  //         }
  //       });
  //   };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_hostUrl}/services/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              const remaining = myData.filter((service) => service._id !== id);
              setMyData(remaining);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={imageURL} />
            </div>
          </div>
          <div>
            <div className="font-bold">{serviceName}</div>
          </div>
        </div>
      </td>

      <td>
        {price}
        <br />
        <span className="badge badge-warning badge-outline badge-sm">
          {area}
        </span>
      </td>

      <th className="space-x-1">
        <button
          onClick={() => {
            setSelectedService(service);
          }}
          className="btn-circle  btn btn-accent"
        >
          <BiSolidPencil />
        </button>
        <button onClick={() => handleDelete(_id)} className="btn-circle  btn btn-accent">
          <FaTrash />
        </button>
      </th>
      {/* modal */}
    </tr>
  );
};

export default MyServiceInfo;
