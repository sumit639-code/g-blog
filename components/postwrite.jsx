"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import supabase from "@/supabase";

const postwrite = (props) => {
  const [photos, setphotos] = useState("");
  const [Content, setContent] = useState();
  const [profile,setprofile] = useState(null)
  let session
  async function getProfiles() {
    const { data, error } = await supabase.auth.getUser();
    setprofile(data.user.id);
    // if (data.length){

    //   setprofile(data)
    // }
    // console.log(data.);
  }
  useEffect(() => {
    if(profile == null){

      getProfiles();
    }
  });
  // console.log(profile,"profile")
  function createPost(){
    supabase.from('posts').insert({
      author: profile,
      content:Content,
    }).then(res=>{
      if(!res.error){
        setContent("");
        console.log(props.onPost)
        if(props.onPost){
          props.onPost();
        }
      }
    })

  }
  return (
    <>
      <div className="mainte">
        <div className="write">
          <Image className="writeavtr" src={props.img} width={40} height={40} alt="avatar" />
          <textarea value={Content} onChange={(e)=>{
            setContent(e.target.value)
          }} name="text" id="content" cols="50" rows="3" placeholder={`Any thing in your mind? ${props.nme}`}></textarea>
        </div>
        <div className="func">
          <div className="funcin">
            <Image src="/photo.svg" width={20} height ={20} alt="picture" />
            <div className="photos">Photos</div>
            {/* <div className="url">Add url</div> */}
          </div>
          <div className="post" onClick={createPost}>Post</div>
        </div>
      </div>
    </>
  );
};

export default postwrite;
