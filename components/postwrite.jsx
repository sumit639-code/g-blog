import Image from "next/image";
import React, { useEffect, useState } from "react";
import supabase from "@/supabase";

const postwrite = () => {
  const [image, setimage] = useState();
  const [Name, setName] = useState("Loading...");
  useEffect(() => {
    async function getProfiles() {
      const { data, error } = await supabase.auth.getUser();
      const user = supabase.auth.getUser();
      let { dat, err, status } = await supabase
        .from("profiles")
        .select(`username`)
        .eq("id", user.id)
        .single();
        console.log(dat,err,status)
      // supabase.auth
      console.log(data.user.user_metadata);
      setimage(data.user.user_metadata.avatar_url);
      setName(data.user.user_metadata.full_name);
    }
    getProfiles();
  });
  console.log(image);
  const [photos, setphotos] = useState("");

  return (
    <>
      <div className="mainte">
        <div className="write">
          <Image src={`/${image}`} width={30} height={20} alt="avatar" />
          <textarea name="text" id="content" cols="40" rows="2"></textarea>
        </div>
        <div className="func">
          <div className="funcin">
            <div className="photos">{Name}</div>
            <div className="url">Add url</div>
          </div>
          <div className="post">Post</div>
        </div>
      </div>
    </>
  );
};

export default postwrite;
