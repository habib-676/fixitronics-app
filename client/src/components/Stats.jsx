import React from "react";
import CountUp from "react-countup";
import iconService from "../assets/service.png";
import trustImg from "../assets/trust_icon.png";
import clientIcon from "../assets/customer-service.png";
import technician from "../assets/mechanic.png";

const Stats = () => {
  return (
    <div className="my-28 text-primary-content">
      <h2 className="text-3xl font-bold text-center">
        Why Thousands Trust Fixitronics ?
      </h2>
      <p className="text-secondary-content text-center my-6">
        We let the numbers speak — proven reliability, expert service, and
        satisfied customers.
        <br /> Real results from real people — our journey, one service at a
        time.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5 mb-10">
        <div className="bg-accent-content rounded-3xl px-11 py-8 flex flex-col justify-between items-start gap-4">
          <img
            src={iconService}
            className="w-[70px] h-[70px] rounded-2xl object-cover"
          />
          <h2 className="font-extrabold text-white text-3xl md:text-5xl">
            <CountUp end={5200} duration={20}></CountUp>+
          </h2>

          <p className="font-semibold text-lg text-gray-400">
            Services Completed
          </p>
        </div>
        <div className="bg-accent-content rounded-3xl px-11 py-8 flex flex-col justify-between items-start gap-4">
          <img
            src={clientIcon}
            className="w-[70px] h-[70px] rounded-2xl object-cover"
          />
          <h2 className="font-extrabold text-white text-3xl md:text-5xl">
            <CountUp end={4800} duration={20}></CountUp>+
          </h2>
          <p className="font-semibold text-lg text-gray-400">Happy Customers</p>
        </div>
        <div className="bg-accent-content rounded-3xl px-11 py-8 flex flex-col justify-between items-start gap-4">
          <img
            src={technician}
            className="w-[70px] h-[70px] rounded-2xl object-cover"
          />
          <h2 className="font-extrabold text-white text-3xl md:text-5xl">
            <CountUp end={120} duration={20}></CountUp>+
          </h2>
          <p className="font-semibold text-lg text-gray-400">
            Active Technicians
          </p>
        </div>
        <div className="bg-accent-content rounded-3xl px-11 py-8 flex flex-col justify-between items-start gap-4">
          <img
            src={trustImg}
            className="w-[70px] h-[70px] rounded-2xl object-cover"
          />
          <h2 className="font-extrabold text-white text-3xl md:text-5xl">
            <CountUp end={75} duration={20}></CountUp>+
          </h2>
          <p className="font-semibold text-lg text-gray-400">Partner Brands</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
