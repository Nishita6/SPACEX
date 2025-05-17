"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import "./shooting-stars.css";  // Import the new CSS file

export default function ShootingStarsDemo({ children, height = "100vh", width = "100%" }) {
  return (
    <div className="shooting-stars-wrapper" style={{ height, width }}>
      {/* Radial gradient background */}
      <div className="background-radial-gradient" />

      {/* Star dots background */}
      <div className="stars" />

      {/* Multiple shooting star layers */}
      <ShootingStars
        starColor="#9E00FF"
        trailColor="#2EB9DF"
        minSpeed={10}
        maxSpeed={35}
        minDelay={800}
        maxDelay={3000}
      />
      <ShootingStars
        starColor="#9E00FF"
        trailColor="#FFB800"
        minSpeed={10}
        maxSpeed={25}
        minDelay={2000}
        maxDelay={4000}
      />
      <ShootingStars
        starColor="#00FF9E"
        trailColor="#00B8FF"
        minSpeed={20}
        maxSpeed={40}
        minDelay={1000}
        maxDelay={2000}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 20 }}>
        {children}
      </div>
    </div>
  );
}
