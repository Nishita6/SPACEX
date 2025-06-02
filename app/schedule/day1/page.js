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

      
        
      themeColor: "#00BCD4",
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
    
    
    // Add more days...
  ];

  return (
    <ShootingStarsDemo height="100%">
    <div style={{  
      height:'100%'
    }}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "40px",
          
        }}
      >
        Schedule xx-xx-xxx
      </h1>
      <div style={{ display: "flex", flexWrap: "wrap", padding: "2rem", display:'flex', alignItems:'center',justifyContent:"center", gap:'10rem', marginTop:'5rem'}}>
        {events.map((event, index) => (
          <ScheduleCard key={index} {...event} />
        ))}
      </div>
       
    </div>
    </ShootingStarsDemo>  
  )
}
