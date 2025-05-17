import React from "react";
import Link from "next/link"
import styles from './schedule.module.css'
import ShootingStarsDemo from "@/components/ui/shooting-stars-demo";

export default function Schedule(){
  return (
    <ShootingStarsDemo>
      <div className={styles.schedule}>
      
      <h1 className={styles.heading}>FEST SCHEDULE</h1>
      
      <div className={styles.daybutton} >
        <Link href="/schedule/day1"><button className={styles.day_buttons}>Day 1</button></Link>
        <Link href="/schedule/day2"><button className={styles.day_buttons}>Day 2</button></Link>
        <Link href="/schedule/day3"><button className={styles.day_buttons}>Day 3</button></Link>
      </div>
      </div>
      
      </ShootingStarsDemo>
    
  );
};


