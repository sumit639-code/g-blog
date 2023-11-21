import Image from "next/image";
import React, { useEffect, useState } from "react";
import supabase from "@/supabase";

const postwrite = () => {
  const [photos, setphotos] = useState("");
  
  return (
    <>
      <div className="mainte">
        <div className="write">
          <Image src="/vercel.svg" width={30} height={20} alt="avatar" />
          <textarea name="text" id="content" cols="40" rows="2"></textarea>
        </div>
        <div className="func">
          <div className="funcin">
            <div className="photos">photos</div>
            <div className="url">Add url</div>
          </div>
          <div className="post">Post</div>
        </div>
      </div>
    </>
  );
};

export default postwrite;
