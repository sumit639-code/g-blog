import Image from "next/image";
import React, { useEffect, useState } from "react";
import supabase from "@/supabase";

const postwrite = () => {
  const [photos, setphotos] = useState("");
  
  return (
    <>
      <div className="mainte">
        <div className="write">
          <Image src="/vercel.svg" width={50} height={30} alt="avatar" />
          <textarea name="text" id="content" cols="50" rows="3" placeholder="Write here....."></textarea>
        </div>
        <div className="func">
          <div className="funcin">
            <Image src="/photo.svg" width={20} height ={20} alt="picture" />
            <div className="photos">Photos</div>
            {/* <div className="url">Add url</div> */}
          </div>
          <div className="post">Post</div>
        </div>
      </div>
    </>
  );
};

export default postwrite;
