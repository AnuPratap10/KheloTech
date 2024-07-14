import React from "react";

import styles from "../styles/Footer.module.css";
import logo24 from "../assets/footer/Vector2024.png";
import appstore from "../assets/footer/appstore.png";
import googlestore from "../assets/footer/google.png";



import {FaXTwitter} from "react-icons/fa6";
import {FaFacebookF} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {GiHummingbird} from "react-icons/gi";
import {FaLinkedinIn} from "react-icons/fa";

export const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.footerRow}>
          <div className={styles.footerColumn}>
            <div>
              <img className={styles.logo24} src={logo24} alt="" />
            </div>

            <div className={styles.footerDownloadApp}>DOWNLOAD THE APP</div>
            <div className={styles.IconImage}>
              <div>
                {" "}
                <FaXTwitter />
              </div>
              <div>
                {" "}
                <FaFacebookF />
              </div>
              <div>
                {" "}
                <FaInstagram />
              </div>
              <div>
                {" "}
                <FaLinkedinIn />
              </div>
            </div>
          </div>

          <div className={styles.footerColumn}>
            <h2>NATIONAL GAME 2024</h2>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Schedule and Result</a>
              </li>
              <li>
                <a href="#">Medal Tally</a>
              </li>
              <li>
                <a href="#">Media</a>
              </li>
              <li>
                <a href="#">Visit</a>
              </li>
              <li>
                <a href="#">Teams</a>
              </li>
              <li>
                <a href="#">Milestones</a>
              </li>
              <li>
                <a href="#">Games Culture</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h2>SPORTS</h2>
            <ul>
              <li>
                <a href="#">Aquatics</a>
              </li>
              <li>
                <a href="#">Swimming</a>
              </li>
              <li>
                <a href="#">Diving</a>
              </li>
              <li>
                <a href="#">Water Polo</a>
              </li>
              <li>
                <a href="#">Archery</a>
              </li>
              <li>
                <a href="#">Athletics</a>
              </li>
              <li>
                <a href="#">Badminton</a>
              </li>
              <li>
                <a href="#">Basketball</a>
              </li>
              <li>
                <a href="#">Boxing</a>
              </li>
              <li>
                <a href="#">Canoing</a>
              </li>
              <li>
                <a href="#">Canoe-sprint</a>
              </li>
              <li>
                <li>
                  <a href="#">Canoe-slalom</a>
                </li>
                <var>v</var>
                <a href="#">Kayaking</a>
              </li>
              <li>
                <a href="#">Rowing</a>
              </li>
              <li>
                <a href="#">Cycling</a>
              </li>
              <li>
                <a href="#">BMX</a>
              </li>
              <li>
                <a href="#">Road Racing</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h2></h2>
            <ul>
              <li>
                <a href="#">Aquatics</a>
              </li>
              <li>
                <a href="#">Swimming</a>
              </li>
              <li>
                <a href="#">Diving</a>
              </li>
              <li>
                <a href="#">Water Polo</a>
              </li>
              <li>
                <a href="#">Archery</a>
              </li>
              <li>
                <a href="#">Athletics</a>
              </li>
              <li>
                <a href="#">Badminton</a>
              </li>
              <li>
                <a href="#">Basketball</a>
              </li>
              <li>
                <a href="#">Boxing</a>
              </li>
              <li>
                <a href="#">Canoing</a>
              </li>
              <li>
                <a href="#">Canoe-sprint</a>
              </li>
              <li>
                <li>
                  <a href="#">Canoe-slalom</a>
                </li>
                <var>v</var>
                <a href="#">Kayaking</a>
              </li>
              <li>
                <a href="#">Rowing</a>
              </li>
              <li>
                <a href="#">Cycling</a>
              </li>
              <li>
                <a href="#">BMX</a>
              </li>
              <li>
                <a href="#">Road Racing</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <ul>
              <li>
                <a href="#">Aquatics</a>
              </li>
              <li>
                <a href="#">Swimming</a>
              </li>
              <li>
                <a href="#">Diving</a>
              </li>
              <li>
                <a href="#">Water Polo</a>
              </li>
              <li>
                <a href="#">Archery</a>
              </li>
              <li>
                <a href="#">Athletics</a>
              </li>
              <li>
                <a href="#">Badminton</a>
              </li>
              <li>
                <a href="#">Basketball</a>
              </li>
              <li>
                <a href="#">Boxing</a>
              </li>
              <li>
                <a href="#">Canoing</a>
              </li>
              <li>
                <a href="#">Canoe-sprint</a>
              </li>
              <li>
                <li>
                  <a href="#">Canoe-slalom</a>
                </li>
                <var>v</var>
                <a href="#">Kayaking</a>
              </li>
              <li>
                <a href="#">Rowing</a>
              </li>
              <li>
                <a href="#">Cycling</a>
              </li>
              <li>
                <a href="#">BMX</a>
              </li>
              <li>
                <a href="#">Road Racing</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h2>UKGOC INFO</h2>
            <ul>
              <li>
                <a href="#">Director Sports,</a>
              </li>
              <li>
                <a href="#">Sports Directorate, Uttarakhand</a>
              </li>
              <li>
                <a href="#">
                  Maharana Pratap Sports College Campus,Raipur,Dehradun
                </a>
              </li>
              <li>
                <a href="#">Pin-248008</a>
              </li>
              <li>
                <a href="#">Ph-0135-2781414</a>
              </li>
              <li>
                <a href="#">Email Id: directorsports@gmail.com</a>
              </li>

              <div className={styles.appstore}>
                <img src={appstore} alt="" />
              </div>
              <div className={styles.appstore}>
                <img src={googlestore} alt="" />
              </div>
            </ul>
          </div>
          
        </div>
        
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
        </div>

       
      </footer>
     
    </div>
  );
};
