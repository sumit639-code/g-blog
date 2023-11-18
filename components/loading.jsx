import React from "react";
import '@/styles/loading.css'

const loading = () => {
  return (
    <>
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default loading;
