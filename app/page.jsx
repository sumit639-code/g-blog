"use client"
import Link from "next/link";
import React from "react";
import ReactPlayer from "react-player/lazy";

const page = () => {
  return (
    <>
      <video autoPlay loop className="video">
        <source src="/vid/intro3.mp4" />
      </video>
      <Link href="/Login" className="loginbtn">Login</Link>
    </>
  );
};

export default page;
