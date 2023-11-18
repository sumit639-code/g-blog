"use client";
import Update from "@/components/update";
import React, { useEffect, useState } from "react";
import Loading from "@/components/loading";
const page = ({ response }) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=492716e25b30427b995ce534f9c4a3c3"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <Loading/>;
  if (!data) return <p>No profile data</p>;

  // const [data, setdata] =  useState();
  console.log(data.articles
    )
  return (
    <>
      {data.articles.map((e,i)=>{
        return <Update {...e} key={i}/>
      })}
    </>
  );
};

export default page;
