"use client";
import React, { useEffect, useState } from "react";
import "@/styles/mainpage.css";
import { motion } from "framer-motion";
import Postwrite from "@/components/postwrite";
import Post from "@/components/post";
import supabase from "@/supabase";
const animations = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};
const page = () => {
  const [image, setimage] = useState();
  const [Name, setName] = useState("Loading...");
  useEffect(() => {
    async function getProfiles() {
      const { data, error } = await supabase.auth.getUser();

      console.log(data.user.user_metadata);
      setimage(data.user.user_metadata.avatar_url);
      setName(data.user.user_metadata.full_name);
    }
    getProfiles();
  });
  return (
    <motion.div
      // key={route.pathname}
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: "spring", duration: 0.6 }}
    >
      <Postwrite img={image}/>
      <Post img={image} nme={Name}/>
    </motion.div>
  );
};

export default page;
