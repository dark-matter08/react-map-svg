import React, { useState } from "react";
import styles from "./teamCard.module.css";
import { map } from "../../assets/images";
import { eye, view_profile } from "../../assets/svg";
export const TeamCard = () => {
  const [enter, setEnter] = useState(false);
  return (
    <div className="snap-start relative">
      <div className={`${styles.hex}`}>
        <img
          className={
            enter &&
            `w-32 h-32 absolute left-0 top-0 mt-[-48px] ml-[-26px] z-20 bg-none data-modal-toggle="popup-modal"`
          }
          src={view_profile}
          alt=""
        />
        <img
          onMouseEnter={() => {
            setEnter(true);
          }}
          onMouseLeave={() => {
            setEnter(false);
          }}
          className="w-18 h-16 absolute left-1 top-5 z-20 bg-none"
          src={eye}
          alt="view"
        />
        <div className={`${styles.hexBg}`}>
          <img className={`${styles.img}`} src={map} alt="profile" />
        </div>
      </div>
      <p className="text-center font-bold text-xl text-white pt-2">NameHere</p>
    </div>
  );
};
