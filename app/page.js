import React from 'react';
import Link from "next/link"
import styles from './home.module.css'
import ShootingStarsDemo from "@/components/ui/shooting-stars-demo";


export default function Home() {
  return (
    <ShootingStarsDemo >
    <div className={styles.home}>
      {/* <img src="spats_react_task/src/image/Black and White Minimal Modern Illustrated Wormhole Logo.png" className='logo-fest'></img> */}
      <h1 className={styles.fest}>SPACEX<br></br><span className={styles.more}>Lets dive deep into space</span></h1>
      
      <div className={styles.main}>
      <Link href={'/schedule'}><button className={styles.space_button}>
        Explore Events
      </button></Link>
      <Link href={'/Register-Now'}><button className={styles.space_button}>
        Register Now
      </button></Link>
      </div>
      

    </div>
    </ShootingStarsDemo>
  );
};


