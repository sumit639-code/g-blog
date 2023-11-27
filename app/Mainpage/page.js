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
  const [posts, setPosts] = useState(null);
  const [image, setimage] = useState();
  const [Name, setName] = useState("Loading...");
  let count =0;
  useEffect(() => {
    async function getProfiles() {
      const { data, error } = await supabase.auth.getUser();

      console.log(data.user.user_metadata);
      setimage(data.user.user_metadata.avatar_url);
      setName(data.user.user_metadata.full_name);
    }
    getProfiles();
    fetchPost();
  },[count]);
  function fetchPost() {
    supabase
      .from("posts")
      .select("id,content,created_at,photos,profiles(id,avatar,name)")
      .order("created_at", { ascending: false })
      .then((result) => {
        console.log(result);
        setPosts(result.data);
        // if (posts == null) {
        //   console.log(posts)
        // }
      });
  }
  console.log(posts);
  return (
    <motion.div
      // key={route.pathname}
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: "spring", duration: 0.6 }}
    >
      <Postwrite onPost={fetchPost} img={image} nme={Name} />
      {posts &&
        posts.map((post) => (
          <Post {...post} img={image} nme={Name} key={posts.created_at} />
        ))}
    </motion.div>
  );
};

export default page;
