"use client";
import React from "react";
import '@/styles/mainpage.css'
import { motion } from "framer-motion";
const animations = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};
const page = () => {
  return (
    <motion.div
      // key={route.pathname}
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: "spring", duration: 0.6 }}
    >
      <div>MainContents</div>
    </motion.div>
  );
};

export default page;
