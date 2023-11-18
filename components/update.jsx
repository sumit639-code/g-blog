import Link from "next/link";
import React from "react";
import "@/styles/updates.css";
const update = (props) => {
  return (
    <>
      <div className="mainbox" key={Math.random()}>
        <Link href={props.url} target="blank" className="link">
          <div className="author">{props.author}</div>
          <div className="title">
            {props.title}
          </div>
          <div className="desc">
            {props.description}
          </div>
        </Link>
        <div className="source">google news</div>
      </div>
    </>
  );
};

export default update;
