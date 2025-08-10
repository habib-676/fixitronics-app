import React, { useEffect } from "react";
import Slider from "../../components/slider/Slider";
import Popular from "./Popular";
import { Helmet } from "react-helmet";
import { motion } from "motion/react";
import Stats from "../../components/Stats";
import Faq from "./Faq";
import { useLocation } from "react-router";
import { scroller } from "react-scroll";
import OurTeam from "./OurTeam";

const teamPromise = fetch("/team.json").then((res) => res.json());
const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "stats") {
      // Delay to make sure Element is mounted
      setTimeout(() => {
        scroller.scrollTo("stats", {
          smooth: true,
          duration: 500,
          offset: -80,
        });
      }, 100);
    }
    if (location.state?.scrollTo === "faq") {
      // Delay to make sure Element is mounted
      setTimeout(() => {
        scroller.scrollTo("faq", {
          smooth: true,
          duration: 500,
          offset: -80,
        });
      }, 100);
    }
    window.history.replaceState({}, document.title);
  }, [location]);
  return (
    <div>
      <Helmet>
        <title>Fixitronics || Home</title>
      </Helmet>
      <motion.section
        initial={{
          x: -500,
        }}
        animate={{
          x: 0,
        }}
        transition={{
          duration: "1",
        }}
      >
        <Slider></Slider>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, x: -400 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.7,
          delay: 1,
        }}
      >
        <Popular></Popular>
      </motion.section>

      <motion.section
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <Stats></Stats>
      </motion.section>
      <motion.section
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <OurTeam teamPromise={teamPromise}></OurTeam>
      </motion.section>

      <motion.section
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <Faq></Faq>
      </motion.section>
    </div>
  );
};

export default Home;
