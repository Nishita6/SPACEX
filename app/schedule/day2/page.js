import React from "react";
import ScheduleCard from "@/components/ui/scheduleCard";
import ShootingStarsDemo from "@/components/ui/shooting-stars-demo";
export default function SchedulePage() {
  const events = [
    {
      venue: "Vikramshila Arena",
      time: "9AM",
      title: "Case Study",
      description:
        "Embark on a thrilling journey through the cosmos with this captivating case study.",

      

    },
    {
      venue: "Vikramshila Arena",
      time: "10AM",
      title: "Lift Off",
      description:
        "Get ready to ignite your imagination and launch your own water rocket.",

      image: "/images/coding.jpg",
      themeColor: "#FF4081",
    },
    {
      venue: "Vikramshila Arena",
      time: "10AM",
      title: "Eggstravaganza",
      description:
        "Put your engineering skills to the test in the ultimate egg-dropping challenge!",

      image: "/images/tech-showcase.jpg",
      themeColor: "#00BCD4",
    },
    {
      venue: "Vikramshila Arena",
      time: "11AM",
      title: "Hoverpod",
      description:
        "Are you ready to take on the challenge of designing a manually controlled, wireless hovercraft?",

      image: "/images/coding.jpg",
      themeColor: "#FF4081",
    },
    {
      venue: "Vikramshila Arena",
      time: "9AM",
      title: "Pitch The Cosmos",
      description: "Showcase of student tech innovations.",

      image: "/images/tech-showcase.jpg",
      themeColor: "#00BCD4",
    },
    {
      venue: "Vikramshila Arena",
      time: "9AM",
      title: "IUCAA Workshop",
      description: "Hands-on coding bootcamps and expert-led sessions.",

      image: "/images/coding.jpg",
      themeColor: "#FF4081",
    },
    {
      venue: "Vikramshila Arena",
      time: "9AM",
      title: "Space Quiz Prelims",
      description:
        "This challenge offers an extraordinary opportunity to test your knowledge of the cosmos and showcase your intellectual prowess",

      image: "/images/tech-showcase.jpg",
      themeColor: "#00BCD4",
    },
    {
      venue: "Vikramshila Arena",
      time: "9AM",
      title: "Cosmomath",
      description: "Hands-on coding bootcamps and expert-led sessions.",

      image: "/images/coding.jpg",
      themeColor: "#FF4081",
    },
    {
      venue: "Vikramshila Arena",
      time: "9AM",
      title: "Guest Lecture",
      description: "Showcase of student tech innovations.",

      image: "/images/tech-showcase.jpg",
      themeColor: "#00BCD4",
    },
    {
      venue: "Vikramshila Arena",
      time: "9AM",
      title: "Talk Show",
      description: "Hands-on coding bootcamps and expert-led sessions.",

      image: "/images/coding.jpg",
      themeColor: "#FF4081",
    },
    // Add more days...
  ];

  return (
     <ShootingStarsDemo height ='100%'>
    <div style={{}}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "40px",
        }}
      >
        Schedule xx-xx-xxx
      </h1>
      <div style={{ display: "flex", flexWrap: "wrap", paddingBottom: "2rem", paddingTop: "2rem" , justifyContent:'center'}}>
        {events.map((event, index) => (
          <ScheduleCard key={index} {...event} />
        ))}
      </div>
      
    </div>
    </ShootingStarsDemo> 
  );
}
