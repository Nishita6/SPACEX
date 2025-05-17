import teamsData from './heads.json';
import subheadsData from './suheads.json'
import styles from './Team.module.css';
import ShootingStarsDemo from "@/components/ui/shooting-stars-demo";
 export default function Teams() {
  return (
    <ShootingStarsDemo height="100%" >
    <div className={styles.container}>
      {teamsData.map((team) => (
        <div key={team.teamName} className="team-section">
          <h2 className={styles.heading}>{team.teamName}</h2>
          <div className={styles.grid}>
            {team.members.map((member) => (
             
              <div key={member.name} className={styles.card}>
                <img src={member.image}  className= {styles.avatar}/>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
                <div className={styles.scan_grid}></div>
              </div>
             
            
              
            ))}
          </div>
        </div>
      ))}
    </div>
    <div className={styles.container}>
      {subheadsData.map((team) => (
        <div key={team.teamName} className="team-section">
          <h2 className={styles.heading}>{team.teamName}</h2>
          <div className={styles.grid}>
            {team.members.map((member) => (
              <div key={member.name} className={styles.card}>
                <img src={member.image}  className= {styles.avatar}/>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.role}>{member.team}</p>
                <div className={styles.scan_grid}></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    </ShootingStarsDemo>
    
  );
}
