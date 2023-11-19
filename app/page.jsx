"use client";
import Link from "next/link";
import React from "react";
import ReactPlayer from "react-player/lazy";
import { motion } from "framer-motion";
const page = () => {
  const text = "Welcome to G-BLOGS";
  return (
    <>
      <video autoPlay loop className="video">
        <source src="/vid/intro3.mp4" />
      </video>
      <div className="box">
        <motion.div className="textlog">
          {text.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "inertia", velocity: 10,duration: 0.2, delay: index * 0.1 }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
        <Link href="/Login" className="loginbtn">
          Login
        </Link>
      </div>
    </>
  );
};

export default page;
