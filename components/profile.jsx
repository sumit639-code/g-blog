import Image from "next/image";
import React from "react";
import '@/styles/profile.css'
const profile = (props) => {
  return (
    <div className="mainprf">
      <Image className="cover-image" src="/sample.jpg" width={600} height={400} alt=""/>
      <div className="prof">
        <Image className="avatar-prf" src={props.avatar}width={40} height={40} alt=""/>
        <div className="name-prf">{props.name}</div>
      </div>
      <div className="post-section">
        <button>post</button>
        <button>about</button>
      </div>
    </div>
  );
};

export default profile;
