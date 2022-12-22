import React from "react";
import { to_top } from "../../assets/images";

export const ProfileCard = ({ data }) => {
  const info = [
    { subject: "Status", text: "Active" },
    { subject: "Email", text: data.user_data.email },
    { subject: "Phone number", text: data.user_data.phoneNumber },
    { subject: "Department", text: data.companySector },
    {
      subject: "Adress",
      text: `${data.user_data.city}, ${data.user_data.countryCode}`,
    },
  ];
  return (
    <div
      className={`w-full h-full flex flex-col space-between bg-white rounded-xl p-8 lg:px-12 lg:py-12`}
    >
      <div className={`flex flex-col text-ash items-center border-b-2`}>
        <img
          className={` h-1/2 md:h-1/3 w-1/2 md:w-1/3 lg:h-[225px] lg:w-[225px] bg-gray-500 rounded-full`}
          src={to_top}
          alt="user pic"
        />
        <h2
          className={`text-black text-lg lg:text-xl xl:text-2xl pt-2 xl:pt-6`}
        >
          {data.user_data.firstName} {data.user_data.lastName}
        </h2>
        <h3 className={`text-lg lg:text-xl pb-3 xl:pb-6`}>
          Fullstack developer
        </h3>
      </div>
      <div className={`flex flex-col gap-2 xl:gap-3 h-1/2 pt-3 xl:pt-6`}>
        {info.map((item, index) => {
          return (
            <div key={index} className={`text-ash`}>
              <p className={`text-lg xl:text-lg`}>{item.subject}</p>
              <p className={`text-xl xl:text-xl font-semibold`}>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
