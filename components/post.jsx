import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import supabase from "@/supabase";
import "@/styles/post.css";
// import Imageport from "https://images.unsplash.com/photo-1697758885406-4d7136458e18?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const post = (props) => {
  // const [image, setimage] = useState();
  // const [Name, setName] = useState("Loading...");
  // useEffect(() => {
  //   async function getProfiles() {
  //     const { data, error } = await supabase.auth.getUser();

  //     console.log(data.user.user_metadata);
  //     setimage(data.user.user_metadata.avatar_url);
  //     setName(data.user.user_metadata.full_name);
  //   }
  //   getProfiles();
  // });
  return (
    <>
      <div className="postboxxx">
        <div className="top">
          <Image
            className="avtr"
            src={props.img}
            width={30}
            height={20}
            alt="avatar"
          />
          <div className="profile">{props.nme}</div>
        </div>
          <div className="textpost">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus tenetur quia facilis maiores, sit, consequatur repudiandae sint fugiat fugit similique est dolor porro? Ex enim accusamus dolorum necessitatibus adipisci est.</div>
          <Image className="postimage" src="https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80" height={400} width={500} alt="nothing" />
        
      </div>
    </>
  );
};
export default post;
