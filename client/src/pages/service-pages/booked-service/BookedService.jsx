import React, { Suspense } from "react";
import useAuth from "../../../hooks/useAuth";

import BookedList from "./BookedList";
import { Helmet } from "react-helmet";
import useBookings from "../../../apis/useBookings";

const BookedService = () => {
  const { user } = useAuth();
  const { myBookingsPromise } = useBookings();
  return (
    <div>
      <Helmet>
        <title>Booked services </title>
      </Helmet>
      <Suspense fallback={"Loading..."}>
        <BookedList
          myBookingsPromise={myBookingsPromise(user.email)}
        ></BookedList>
      </Suspense>
    </div>
  );
};

export default BookedService;
