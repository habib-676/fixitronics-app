import React, { use } from "react";
import { Link } from "react-router";

const BookedList = ({ myBookingsPromise }) => {
  const bookings = use(myBookingsPromise);

  return (
    <div className="min-h-[80vh] text-primary-content">
      {bookings.length ? (
        <div>
          <h4 className="my-10 text-3xl text-center font-bold">
            Your <span className="text-accent">Orders</span>
          </h4>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="col-span-2 border-2 rounded-3xl overflow-x-auto">
              <table className=" table text-primary-content">
                <thead>
                  <tr className="text-secondary-content">
                    <th></th>
                    <th>Service</th>
                    <th>Date</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((order, index) => (
                    <tr key={order._id}>
                      <th>{index + 1}</th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img src={order.serviceImg} />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{order.serviceName}</div>
                          </div>
                        </div>
                      </td>
                      <td>{order.date}</td>
                      <td className="text-warning ">
                        <span className="border border-warning-1 p-2 rounded-2xl">
                          {order.price} Tk
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-span-1 p-6 border-2 rounded-3xl bg-base-300">
              <p className="font-bold text-2xl">Promo code </p>
              <div className="flex ">
                <input
                  type="text"
                  name="promoCode"
                  className="input border border-accent-content"
                  placeholder="Type here ..."
                />
                <button className="btn ml-2 btn-accent">Apply</button>
              </div>
              <p className="font-extrabold text-3xl text-center mt-9">
                Enter Code. Save Big. Smile More.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-[80vh]">
          <h3 className="font-black text-5xl ">No bookings found</h3>
          <Link className="btn btn-secondary mt-6" to={"/services"}>
            Go to services
          </Link>
        </div>
      )}
    </div>
  );
};

export default BookedList;
