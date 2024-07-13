import React from "react";
import newsImage from "../assets/assets2/newsImage.png";
import styles from "../styles/Latest.module.css"
export const LatestNews = () => {
  return (
    <div className={styles.newsContainer} style={{backgroundColor:"white"}}>
      <h1 style={{marginLeft: "70px"}}>Latest News</h1>

      <div className={styles.margin80}>

        <div className={styles.newsBox}>

        <div className={styles.newsFirstBox}>
          <div className={styles.newsSecondBox}>
            <img src={newsImage} alt="image" />

            <p className={styles.newsFirstBoxP}>
              Swasti Singh’s gold powers Odisha past 50 medals
            </p>
          </div>
        </div>


        <div className={styles.newsFirstBox}>
          <div className={styles.newsSecondBox}>
            <img src={newsImage} alt="image" />

            <p className={styles.newsFirstBoxP}>
              Swasti Singh’s gold powers Odisha past 50 medals
            </p>
          </div>
        </div>

        <div className={styles.newsFirstBox}>
          <div className={styles.newsSecondBox}>
            <img src={newsImage} alt="image" />

            <p className={styles.newsFirstBoxP}>
              Swasti Singh’s gold powers Odisha past 50 medals
            </p>
          </div>
        </div>

        </div>

        
  <div className={styles.newsBox}>

        <div className={styles.newsFirstBox}>
          <div className={styles.newsSecondBox}>
            <img src={newsImage} alt="image" />

            <p className={styles.newsFirstBoxP}>
              Swasti Singh’s gold powers Odisha past 50 medals
            </p>
          </div>
        </div>


        <div className={styles.newsFirstBox}>
          <div className={styles.newsSecondBox}>
            <img src={newsImage} alt="image" />

            <p className={styles.newsFirstBoxP}>
              Swasti Singh’s gold powers Odisha past 50 medals
            </p>
          </div>
        </div>

        <div className={styles.newsFirstBox}>
          <div className={styles.newsSecondBox}>
            <img src={newsImage} alt="image" />

            <p className={styles.newsFirstBoxP}>
              Swasti Singh’s gold powers Odisha past 50 medals
            </p>
          </div>
        </div>

        </div>


      </div>
    </div>
  );
};
