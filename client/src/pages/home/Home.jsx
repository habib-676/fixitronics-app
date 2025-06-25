import React from "react";
import Slider from "../../components/slider/Slider";
import Popular from "./Popular";
import { Helmet } from "react-helmet";
import { motion } from "motion/react";
import Stats from "../../components/Stats";
import Faq from "./Faq";

const Home = () => {
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
        <Faq></Faq>
      </motion.section>
    </div>
  );
};

export default Home;
