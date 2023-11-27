"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import supabase from "@/supabase";

const postwrite = (props) => {
  const [photos, setphotos] = useState("");
  const [Content, setContent] = useState();
  const [isuploading, setIsuploading] = useState(false);
  const [uploading, setUploading] = useState([]);
  const [profile, setprofile] = useState(null);
  let session;
  async function getProfiles() {
    const { data, error } = await supabase.auth.getUser();
    setprofile(data.user.id);
  }
  useEffect(() => {
    if (profile == null) {
      getProfiles();
    }
  });

  function addPhotos(ev) {
    const files = ev.target.files;
    if (files.length > 0) {
      setIsuploading(true);
      for (const file of files) {
        const newName = Date.now() + file.name;
        supabase.storage
          .from("photos")
          .upload(newName, file)
          .then((result) => {
            if (result.data) {
              const url =
                process.env.NEXT_PUBLIC_SUPABASE_URL +
                "/storage/v1/object/public/photos/" +
                result.data.path;
              setUploading((prevupload) => [...prevupload, url]);
              console.log(result.data);
            } else {
              console.log(result);
            }
          });
        // console.log(file);
      }
      setIsuploading(false);
    }
  }
  // console.log(profile,"profile")
  function createPost() {
    supabase
      .from("posts")
      .insert({
        author: profile,
        content: Content,
        photos: uploading,
      })
      .then((res) => {
        if (!res.error) {
          setContent("");
          setUploading([]);
          console.log(props.onPost);
          if (props.onPost) {
            props.onPost();
          }
        }
      });
  }
  return (
    <>
      <div className="mainte">
        <div className="write">
          <Image
            className="writeavtr"
            src={props.img}
            width={40}
            height={40}
            alt="avatar"
          />
          <textarea
            value={Content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
            name="text"
            id="content"
            cols="50"
            rows="3"
            placeholder={`Any thing in your mind? ${props.nme}`}
          ></textarea>
        </div>
        {isuploading && <div>uploading... please wait</div>}
        {uploading && (
          <div className="up2">
            {uploading.map((upload) => (
              <div className="imageup">
                <Image
                  className="importimage"
                  src={upload}
                  alt="file upload"
                  width={100}
                  height={100}
                />
              </div>
            ))}
          </div>
        )}

        <div className="func">
          <div className="funcin">
            <input
              type="file"
              className="fileupload"
              multiple
              onChange={addPhotos}
            />
            <Image src="/photo.svg" width={20} height={20} alt="picture" />
            <div className="photos">Photos</div>
            {/* <div className="url">Add url</div> */}
          </div>
          <div className="post" onClick={createPost}>
            Post
          </div>
        </div>
      </div>
    </>
  );
};

export default postwrite;
