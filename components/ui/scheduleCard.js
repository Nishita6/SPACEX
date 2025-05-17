import React from "react";
import styles from "./ScheduleCard.module.css";

export default function ScheduleCard({
  venue,
  time,
  title,
  description,
  time1,
  image,
  themeColor,
}) {
  return (
    <div className={styles.card} style={{ borderColor: themeColor }}>
      <div className={styles.label} style={{ backgroundColor: themeColor }}>
        {title}
      </div>

      <div className={styles.content}>
        <div className={styles.venue}>
          <span className={styles.time}>{venue}</span>
          <span className={styles.num}>{time}</span>
        </div>

        <div
          className={styles.image}
          style={{ backgroundImage: `url(${image})` }}
        />

        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
