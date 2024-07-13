import React from "react";
import followImages from "../assets/sports/follow.png";

import {FaXTwitter} from "react-icons/fa6";
import {FaFacebookF} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {GiHummingbird} from "react-icons/gi";
import {FaLinkedinIn} from "react-icons/fa";
import styles from "../styles/Follow.module.css"
export const FollowUsPages = () => {
  return (
    <div className={styles.followMainContainer} style={{backgroundColor:"white",marginTop:"5%"}}>
      <div className={styles.margin80}>
        <div className={styles.followFirstBox}>
          <div className={styles.followSecDiv}>
            <h1 style={{color:"#81378F"}}>FOLLOW US</h1>
            <div className={styles.followIcon}>
              <div>
                <FaXTwitter />
              </div>
              <div>
                <FaFacebookF />
              </div>
              <div>
                <FaInstagram />
              </div>
              <div>
                <GiHummingbird />
              </div>
              <div>
                <FaLinkedinIn />
              </div>
            </div>
            <h1 className={styles.followIconH1}>#UTTRAKHANDGAMES2024</h1>
          </div>
          <div className={styles.followThirdDiv}>
            <img className={styles.followImage} src={followImages} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
