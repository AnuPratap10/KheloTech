import React from "react";

import m1Image from "../assets/Moscot/m1.png";
import m2Image from "../assets/Moscot/m2.png";
import styles from "../styles/Mascot.module.css";

export const MascotPage = () => {
  return (
    <div style={{backgroundColor: "white"}}>
      <div className={styles.margin80}>
        <div className={styles.moscotD1} style={{}}>
          <div className={styles.moscotD2}>
            <h1>HI! I AM</h1>
            <h1>The Mascot</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
              praesentium excepturi impedit esse iure officiis temporibus dicta
            </p>
            <button className={styles.MoscotButton}>MEET MASCOT </button>
          </div>

          <div className={styles.MoscotimageContainer}>
            <img className={styles.M1Image} src={m1Image} alt="" width="auto" />
            <img className={styles.M2Image} src={m2Image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
