import React from "react";
import Marquee from "react-fast-marquee";

const Latest = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="bg-secondary text-white py-2 px-3">Latest</p>
      <Marquee pauseOnHover={true}>
        <div className="flex gap-5">
          <p className="font-bold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            voluptates debitis molestias nam iure sit?
          </p>
          <p className="font-bold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            voluptates debitis molestias nam iure sit?
          </p>
          <p className="font-bold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            voluptates debitis molestias nam iure sit?
          </p>
        </div>
      </Marquee>
    </div>
  );
};

export default Latest;
