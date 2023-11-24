import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import supabase from "@/supabase";
import "@/styles/post.css";
const post = () => {
  const [image, setimage] = useState();
  const [Name, setName] = useState("Loading...");
  useEffect(() => {
    async function getProfiles() {
      const { data, error } = await supabase.auth.getUser();
      // const user = supabase.auth.getUser();
      // let { dat, err, status } = await supabase
      //   .from("profiles")
      //   .select(`username`)
      //   .eq("id", user.id)
      //   .single();
      //   console.log(dat,err,status)
      // // supabase.auth
      console.log(data.user.user_metadata);
      // setimage(data.user.user_metadata.avatar_url);
      setName(data.user.user_metadata.full_name);
    }
    getProfiles();
  });
  return (
    <>
      <div className="postbox">
        <div className="top">
          <Image
            className="avtr"
            src="/vercel.svg"
            width={30}
            height={20}
            alt="avatar"
          />
          <div className="profile">{Name}</div>
        </div>
        <div className="imageofpost"></div>
      </div>
    </>
  );
};
export default post;
