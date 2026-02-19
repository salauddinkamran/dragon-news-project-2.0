import React from "react";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h3 className="font-bold">Find Us</h3>
      <div className="join join-vertical w-full">
        <button className="btn bg-base-100 justify-start join-item">
          <FaFacebookF /> Facebook
        </button>
        <button className="btn bg-base-100 justify-start join-item">
          <BsTwitterX />
          Twitter
        </button>
        <button className="btn bg-base-100 justify-start join-item">
          <BsInstagram />
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
