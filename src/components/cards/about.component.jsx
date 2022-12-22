import React from "react";

export const About = () => {
  return (
    <div
      className={`w-full w-full h-fit bg-white rounded-lg px-8 py-4 xl:px-12 xl:py-5 text-gray-500 flex flex-col gap-4`}
    >
      <div className={` text- xl:text-lg`}>About</div>
      <div className={` text-lg xl:text-lg font-bold`}>
        The lorem ipsum is, in printing, a series of meaningless words used
        temporarily to calibrate a layout, the final text replacing the false
        text as soon as it is ready or the layout is completed. Generally, a
        false Latin text, Lorem ipsum or Lipsum, is used.
      </div>
    </div>
  );
};
