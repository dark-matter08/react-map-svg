import React from "react";

export const About = ({ data }) => {
  return (
    <div
      className={`w-full w-full h-1/3 bg-white rounded-lg px-8 py-4 xl:px-12 xl:py-5 text-gray-500 flex flex-col gap-4`}
    >
      <div className={` text- xl:text-lg`}>About</div>
      <div className={` text-lg xl:text-lg font-bold text-ellipsis`}>
        {data.bio}
      </div>
    </div>
  );
};
