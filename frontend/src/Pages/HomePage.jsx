import React from "react";
import uttarakhandLogo from "../assets/white.png";
import ticket from "../assets/tickets.png";
import login from "../assets/login.png";
import search from "../assets/search.png";
import shoping from "../assets/shoping.png";

import seal from "../assets/Seal.png";
import sport from "../assets/sport.png";
import ministry from "../assets/Ministry.png";
import ind from "../assets/ind.png";
import medal from "../assets/medal.png";



import {FaArrowRightLong} from "react-icons/fa6";

const HomePage = () => {
  return (
    <>
      <div className="MainContainer">
        <div className="background">
          <div className="margin80">
            <div className="menuline">
              <div className="frame">
                <div iv className="hamburger-menu">
                  <div className=" ellipse ">
                    <div className="hamburger-line"></div>
                    <div className="hamburger-line"></div>
                    <div className="hamburger-line"></div>
                  </div>
                </div>
                <div className="menutext">Menu</div>
              </div>
              <div>
                <img src={uttarakhandLogo} alt="Uttarakhand Logo" />
              </div>
              <div className="navbar">
                <div className="nav-item">
                  <img src={ticket} alt="Ticket" width="15px" />
                  <div>ticket</div>
                </div>
                <div className="nav-item">
                  <img src={shoping} alt="Shopping" width="15px" />
                  <div>shoping</div>
                </div>
                <div className="nav-item">
                  <img src={login} alt="Login" width="15px" />
                  <div>login</div>
                </div>

                <div className="search-container">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="search-input"
                  />
                  <img src={search} alt="Search" className="search-icon" />
                </div>
              </div>
            </div>
            <div className="middleHeading">
              <div className="content">
                <div className="images">
                  <img src={seal} alt="Seal" />
                  <img src={sport} alt="Sport" />
                  <img src={ministry} alt="Ministry" />
                  <img src={ind} alt="Ind" />
                  <img src={medal} alt="Medal" />
                </div>
              </div>
              <div className="days">
                <div className="numbers">
                  <span>179</span>
                  <span>11</span>
                  <span>56</span>
                  <span>05</span>
                </div>
                <div className="labels">
                  <span>Days</span>
                  <span>Hours</span>
                  <span>Mins</span>
                  <span>Sec</span>
                </div>
              </div>
            </div>

            {/* <div className="parantText">
              <div className="leftBottombox">
                <h2>The 38th National Games, Uttarakhand 2024</h2>
                <p>
                  Where fervour converges with brilliance! Immerse yourself in
                  the exhilarating spectacle as athletes hailing from every
                  corner of Uttarakhand vie for victory in a dazzling display of
                  skill and camaraderie. Come together to commemorate our
                  abundant sporting legacy and kindle the flame of togetherness.
                  Brace yourself for an indelible odyssey towards sporting
                  eminence. Prepare to dive into the excitement and witness the
                  enchantment of the National Games hosted in Uttarakhand!
                </p>
                <div className="background-box">
                  <h2>Uttarakhand Unleashed &rarr;</h2>
                </div>
              </div>
              <div className="rightBottomBoxMain">
                <div className="rightBottombox">
                  <button className="loremh1">Live Registration</button>
                  <h3 className="loremh2">The Game Live Registration</h3>
                  <p className="lorem">
                    {" "}
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolorum fugiat, distinctio odio esse corporis laborum sequ
                  </p>
                </div>
                <div className="rightBottomBox">
                  <button className="loremh1">Live Registration</button>
                  <h3 className="loremh2">The Game Live Registration</h3>
                  <p  className="lorem">
                    {" "}
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolorum fugiat, distinctio odio esse corporis laborum sequ
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
