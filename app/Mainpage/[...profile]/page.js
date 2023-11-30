"use client";
import React, { useEffect, useState } from "react";
import Profile from "@/components/profile";
import { motion } from "framer-motion";
import supabase from "@/supabase";
import { useParams } from "next/navigation";
import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";

const animations = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};
const page = () => {

  const router = useParams();
  const query = router.profile[1];
  // const query = router.get("q");
  // const userId = router.query.id;
  // console.log(router.profile[1]);
  const [profile, setprofile] = useState(null);
  useEffect(() => {
    if(!query){
      return;
    }
    supabase.from('profiles')
    .select()
    .eq('id',query)
    .then(result =>{
      if(result.error){
        throw result.error
      }
      if(result.data){
        setprofile(result.data[0])
      }
    })
  }, [query])
  // console.log(profile)
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
        <Profile {...profile}/>
      </motion.div>
    </>
  );
};

export default page;
