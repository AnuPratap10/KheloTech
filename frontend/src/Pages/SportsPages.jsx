import React from 'react'

import sportsFarmeImage from "../assets/sports/Frame.png"

import styles from "../styles/Sports.module.css"

export const SportsPages = () => {
  return (
    <div className={styles.SportsMainContainer} 
    style={{backgroundColor:"white", marginTop:"5%"}}>
        <div className={styles.margin80}>
            <div className={styles.sportsFirstContainer}>
                <h1>SPORTS</h1>
                <button className={styles.sportButton}>VIEW MORE</button>
            </div>

<div className={styles.sportDivBox}>
    <div className={styles.sportDivBox1}>

    <div>
        <img src={sportsFarmeImage} alt="" />
    </div>
    <div>
    <img src={sportsFarmeImage} alt="" />
    </div>
    <div>
    <img src={sportsFarmeImage} alt="" />
    </div>
    <div>
    <img src={sportsFarmeImage} alt="" />
    </div>
    <div>
        <img src={sportsFarmeImage} alt="" />
    </div>
    <div>
        <img src={sportsFarmeImage} alt="" />
    </div>
    </div>

</div>

<div className={styles.sportDivBox}>
    <div className={styles.sportDivBox1}>

    <div>
        <img src={sportsFarmeImage} alt="" />
    </div>
    <div>
    <img src={sportsFarmeImage} alt="" />
    </div>
    <div>
    <img src={sportsFarmeImage} alt="" />
    </div>
    <div>
    <img src={sportsFarmeImage} alt="" />
    </div>
    <div>
        <img src={sportsFarmeImage} alt="" />
    </div>
    <div>
        <img src={sportsFarmeImage} alt="" />
    </div>
    </div>



    
</div>

        </div>
    </div>
  )
}
