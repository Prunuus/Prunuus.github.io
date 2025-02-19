import React from 'react';
import styles from '../styles/navbar.module.css';  // Updated import
import { Aoboshi_One } from 'next/font/google';

const aoboshi = Aoboshi_One({
  subsets: ['latin'],
  weight: ['400']
})


const Navbar = () => {
  
  return (
    <>
      <section className={styles.navbar}>

        <div className={styles.navLogo}>
          <a href='/'><p className={styles.text}>Kevin's Cardboard Box</p></a>
          <a style={{height: "100%", width : "50px"}} href='/'><div className={styles.navImg} ></div></a>
        </div>

        <div className={styles.navButtonContainer}>
          <a href="../projects">
            <button  className={styles.navButtons}> <p className={aoboshi.className}>Projects</p></button>
          </a>
          <a href="https://drive.google.com/uc?export=download&id=1WEQPETvLV-wK1y4KIqCY7OfwTboYdG2d">
            <button className={styles.navButtons}><p className={aoboshi.className}>Resume</p></button>
          </a>
          {/* <a href="#">
            <button className={styles.navButtons}>Secret</button>
          </a> */}
        </div>
        
      </section>
    </>
  );
}

export default Navbar;
