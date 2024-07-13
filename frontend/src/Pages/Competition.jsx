import React from "react";

import zoneMap from "../assets/sports/worldMap.png"
import zone from "../assets/sports/zone.png"
import styles from "../styles/Zone.module.css"

export const Competition = () => {
  return (
    <div style={{marginTop:"5%"}}>
      <div className={styles.margin80}>
        <div className={styles.zoneMainContainer}>
          <div>
            <h1 className={styles.zoneH1}>COMPETITION ZONE</h1>
            <div>
              <img className={styles.zoneImage} src={zone} alt="" />
            </div>
            <div className={styles.zoneColor}>
              <h1 className={styles.zoneH1Sec}>DELHI</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                velit mollitia beatae eligendi saepe, deleniti quas ducimus
                
              </p>
              <div className={styles.zoneExplore}>
                <button >EXPLORE</button>
              </div>
            </div>
          </div>
          <div>
            <img className={styles.zoneMaps} src={zoneMap} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
