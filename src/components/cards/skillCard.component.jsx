import React from "react";

export const SkillCard = ({ data }) => {
  const skills = data.skills;
  return (
    <div
      className={`h-fit w-full bg-white rounded-lg px-8 py-4 xl:px-12 xl:py-4 text-gray-500 flex flex-col gap-4`}
    >
      <p>Skills</p>
      <div className={`flex space-x-4 flex-wrap`}>
        {skills.map((item, index) => {
          return (
            <span
              className={`w-fit px-4 py-2 xl:text-lg flex-grow border-2 rounded-full text-center my-1`}
              key={index}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
};
