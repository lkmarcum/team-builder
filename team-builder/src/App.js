import React, { useState } from "react";
import Form from "./Form";
import MemberCard from "./MemberCard";
import "./App.css";

function App() {
  const [team, setTeam] = useState([]);

  function updateTeam(member) {
    const tempTeam = [...team, member];
    setTeam(tempTeam);
    // setTeam(team.push(member));
    // tempTeam.push(member);
    // setTeam(tempTeam);
    console.log("Team: ", team);
  }
  return (
    <div className="App">
      <Form addMember={updateTeam} />
      <div className="team-list">
        {team.map(teamMember => (
          <MemberCard teamMember={teamMember} />
        ))}
      </div>
    </div>
  );
}

export default App;
