import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import supabase from "@/supabase";
import "@/styles/post.css";
// import Imageport from "https://images.unsplash.com/photo-1697758885406-4d7136458e18?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

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
          <div className="textpost">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus tenetur quia facilis maiores, sit, consequatur repudiandae sint fugiat fugit similique est dolor porro? Ex enim accusamus dolorum necessitatibus adipisci est.</div>
          <Image className="postimage" src="/sample.jpg" height={400} width={500} alt="nothing" />
        
      </div>
    </>
  );
};
export default post;
