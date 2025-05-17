'use client'

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import styles from './login.module.css'
import Link from "next/link"
import ShootingStarsDemo from "@/components/ui/shooting-stars-demo";

export default function Login ()  {
  const router = useRouter(); // redirect users to different routes , here to /profile
  const [username, setUsername] = useState(""); //intitalise variables with empty string
  const [password, setPassword] = useState("");
  // const navigate = useNavigate(); // redirect users to different routes , here to /profile

  const handleSubmit = (e) => {
    e.preventDefault(); //page will not be refreshed after submitting
    // Save login details to Local Storage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    router.push("/profile"); // Redirect to Profile Page
    // Redirect to Profile Page
   ; // after login user will be directed to profile page
  };

  return (
    <ShootingStarsDemo>
    <div className={styles.login_container}>
      <form className={styles.login_form} onSubmit={handleSubmit}>
        {" "}
        {
          // the onsubmit event triggers when form submitted
        }
        <h1 className={styles.heading}>
          Login

        </h1>
        <div className={styles.form_group}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="password">Password</label>
          <input
            type="password" //it hides the input characters
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <button
          type="submit" // it defines the button as form submission button, and when button clicked handled data with js
          className={styles.login_button}
        >
          Login
        </button>
        
        
      </form>
    </div>
    </ShootingStarsDemo>
  );
};

