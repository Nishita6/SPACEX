'use client'
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from './profile.module.css'
import Link from "next/link"
import ShootingStarsDemo from "@/components/ui/shooting-stars-demo";

export default function Profile() {
  const [userData, setUserData] = useState({}); //intitalise user data as empty object
  const router = useRouter();

  // Fetch user data from Local Storage
  useEffect(
    () => {
      // use effect runs after the component updates
      const username = localStorage.getItem("username");
      const password = localStorage.getItem("password"); 
      if (!username) {
        router.push("/login");
      } else {
        setUserData({ username, password });
      } // Optional: Include password if needed
      
       
      
    },
    [] // it pervents infinite renders}
  );

  // this hooks take takes two arguments here the second argument is the dependency array

  // Logout function
  const handleLogout = () => {
    localStorage.clear(); // Clear all data from Local Storage
    router.push("/login"); // Redirect to Login Page
  };

  return (
    <ShootingStarsDemo>
    <div className={styles.profile_container}>
      <div className={styles.profile_card}>
        <h1>Welcome, {userData.username}!</h1>
        <p>
          <strong>Username:</strong> {userData.username}
        </p>
        <p>
          <strong>Password:</strong> {userData.password}
        </p>{" "}
        {/* Optional */}
        <p>
          <strong>Date:</strong> {new Date().toLocaleDateString()}
        </p>{" "}
        {
          // formats date as "mm//dd//yyy"
        }
        <p>
          <strong>Time:</strong> {new Date().toLocaleTimeString()}
        </p>{" "}
        {
          // formats time as "hh:Mm:ss am/pm"
        }
        <Link href='/Register-Now'>
        <button className={styles.logout_button} onClick={handleLogout} >
          Logout
        </button>
        </Link>
      </div>
    </div>
    </ShootingStarsDemo>
  );
};


