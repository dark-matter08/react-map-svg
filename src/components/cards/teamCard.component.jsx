import React, { useState } from "react";
import styles from "./teamCard.module.css";
import { eye, view_profile } from "../../assets/svg";
// import styles from "./chart-map-extended/styles.module.css";

export const TeamCard = ({ setOpen, setCurrentUser, data }) => {
  const [enter, setEnter] = useState(false);

  let image_url;
  if (data.profileImage) {
    image_url = `https://camsol.directus.app/assets/${data.profileImage.id}?access_token=HTxS57Xk52L6TtrMis7kaJ-FVtee_-5Z`;
  } else {
    image_url = "";
  }

  return (
    <div
      className="snap-start relative hover:cursor-pointer"
      onMouseEnter={() => {
        setEnter(true);
      }}
      onMouseLeave={() => {
        setEnter(false);
      }}
      onClick={() => {
        setOpen(true);
        setCurrentUser(data);
      }}
    >
      <div className={`${styles.hex}`}>
        <img className={`${styles.hexBg}`} src={image_url} alt="profile" />
      </div>
      <img
        onClick={() => {
          setOpen(true);
        }}
        className="w-18 xl:w-24 h-12 absolute left-[3px] xl:left-[-17px] top-[5px] bg-none"
        src={eye}
        alt="view"
      />
      <img
        className={enter ? "absolute left-[-10px]  top-[5px]" : "hidden"}
        src={view_profile}
        alt="view"
      />
      <p className="text-center font-bold text-xl text-white pt-2">
        {data.user_data.lastName}
      </p>
    </div>
  );
};
