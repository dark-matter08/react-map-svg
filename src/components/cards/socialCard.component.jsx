import React from "react";
import { github, linkedin_blue, web, facebook } from "../../assets/svg";

export const SocialMediaCard = ({ data }) => {
  const socials = [
    { icon: github, link: data.github },
    { icon: linkedin_blue, link: data.linkedIn },
    { icon: web, link: data.twitter },
    { icon: facebook, link: data.facebook },
  ];
  return (
    <div
      className={`h-fit w-full bg-white rounded-lg px-8 py-4 xl:px-12 xl:py-5 text-gray-500 flex flex-col gap-4`}
    >
      <p className={`text-lg`}>Social Media</p>
      <div className={`flex flex-col gap-2`}>
        {socials.map((item, index) => {
          return (
            <div key={index}>
              {item.link && (
                <div
                  className={`flex gap-2 xl:gap-4 items-center hover:cursor-pointer`}
                >
                  <img
                    className={` w-6 h-6 lg:w-10 lg:h-10`}
                    src={item.icon}
                    alt="icon"
                  />
                  <a className={`text-purple text-lg lg:text-xl`}>
                    {item.link}
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
