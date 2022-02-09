import React from "react";
import {Link} from "react-router-dom"
import styles from "./Landing.module.css"


const LandingPage=()=>{
    return(
      <div className={styles.landing}>
        <div className={styles.container}>


      <Link to="/home">
      <button className={styles.boton}>Start!</button>
      </Link>

      
        </div>
        </div>
    )
}
export default LandingPage