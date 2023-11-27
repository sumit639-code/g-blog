import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import supabase from "@/supabase";
import "@/styles/post.css";
const post = (props) => {
  return (
    <>
      <div className="postboxxx" key={props.key}>
        <div className="top">
          <Image
            className="avtr"
            src={props.profiles.avatar}
            width={30}
            height={20}
            alt="avatar"
          />
          <div className="profile">{props.profiles.name}</div>
        </div>
        <div className="textpost">{props.content}</div>
        {/* <Image className="postimage" src="https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80" height={400} width={500} alt="nothing" />
         */}
        {props.photos && (
          <span>
            {props.photos.map((photo) => {
            return <Image
              className="postimage"
              src={photo}
              height={400}
              width={500}
              alt="nothing"
            />;
          })}
          </span>
        )}
      </div>
    </>
  );
};
export default post;
