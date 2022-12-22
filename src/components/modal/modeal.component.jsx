import React from "react";
import { About } from "../cards/about.component";
import { ProfileCard } from "../cards/profileCard.component";
import { SkillCard } from "../cards/skillCard.component";
import { SocialMediaCard } from "../cards/socialCard.component";
import { closer } from "../../assets/svg";

export const Modal = ({ setOpen, data }) => {
  console.log(data);
  return (
    <section
      className={`absolute top-0 left-0 w-full h-full py-2 bg-dark backdrop-blur-sm bg-opacity-80`}
    >
      <div className="m-auto lg:px-8 xl:px-12 bg-white w-full md:w-10/12 lg:w-11/12  xl:w-8/12 h-fit gap-4 xl:gap-4 py-2 xl:py-4 rounded-xl flex flex-col backdrop-blur-xl bg-opacity-10">
        <div
          id="chartdiv-extended"
          className="border-2 border-dark px-auto hidden"
          style={{ width: "100%", height: "40vw" }}
        ></div>
        <img
          className={`self-end p-2 rounded-xl hover:cursor-pointer hover:bg-gray-900 hover:cursor-pointer`}
          onClick={() => {
            setOpen(false);
          }}
          src={closer}
          alt="closer"
        />
        <div className={` flex flex-col lg:flex-row gap-4 xl:gap-6`}>
          <div className={`w-full lg:w-5/12`}>
            {" "}
            <ProfileCard data={data} />
          </div>
          <div className={`flex flex-col w-full lg:w-7/12 gap-2 xl:gap-4`}>
            <About data={data} />
            <SkillCard data={data} />
            <SocialMediaCard data={data} />
          </div>
        </div>
      </div>
    </section>
  );
};
