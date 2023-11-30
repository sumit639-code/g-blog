import Link from "next/link";
import React, { useState } from "react";
import "@/styles/updates.css";
import ReactTimeAgo from 'react-time-ago'

const update = (props) => {

  return (
    <>
      <div className="mainbox" key={Math.random()}>
        <div className="company">{props.company_name}</div>
        <div className="title-company">{props.title}</div>
        <div className="description">{props.plain_text_description}</div>
        <div className="publication"><ReactTimeAgo date={props.publication_time} locale="en-US"/></div>

        <div className="bottom">
          <div className="salary">
            salary:-
            <div>min-salary : {props.salary && props.salary.min_salary},</div>
            <div>
              max-salary :{props.salary && props.salary.max_salary},
            </div>{" "}
            <div>
              salary_type:
              {props.salary && props.salary.salary_type}
            </div>
          </div>
          <Link href={props.application_url} target="blank" className="apply">
            Apply
          </Link>
        </div>
        <div className="source">{props.source}</div>
      </div>
    </>
  );
};

export default update;
