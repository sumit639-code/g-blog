"use client";
import Update from "@/components/update";
import React, { useEffect, useState } from "react";
import Loading from "@/components/loading";
import { motion } from "framer-motion";
import Data from '@/data/data.json'
const animations = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};
const page = ({ response }) => {
  let count =0;
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  async function getData() {
    // const url =
    //   "https://job-search-api1.p.rapidapi.com/v1/job-description-search?q=software%20engineer&page=1&country=us&city=Seattle";
    // const options = {
    //   method: "GET",
    //   headers: {
    //     "X-RapidAPI-Key": "ac7e92165fmsh9d9a81dbef13b4cp16def5jsnfa7cf26e6bd6",
    //     "X-RapidAPI-Host": "job-search-api1.p.rapidapi.com",
    //   },
    // };

    // try {
    //   const response = await fetch(url, options);
    //   const result = await response.json();
    //   setData(result);
    //   console.log(result);
    //   setLoading(false)
    // } catch (error) {
    //   console.error(error);
    // }
  }

  useEffect(() => {
    setData(Data)
    getData()
  },[count]);
  // console.log(Data);
  if (isLoading) return <Loading />;
  if (!data) return <p>No profile data</p>;

  // const [data, setdata] =  useState();
  return (
    <>
      <motion.div
        // key={route.pathname}
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ type: "spring", duration: 0.6 }}
      >
        {data.jobs.map((e, i) => {
          return <Update {...e} key={e.id} />;
        })}
      </motion.div>
    </>
  );
};

export default page;
