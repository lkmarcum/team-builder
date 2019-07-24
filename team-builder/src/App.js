import React, { useState } from "react";
import Form from "./Form";
import MemberCard from "./MemberCard";
import "./App.css";

function App() {
  const [team, setTeam] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState({});

  function updateTeam(member) {
    const tempTeam = [...team, member];
    setTeam(tempTeam);
    // setTeam(team.push(member));
    // tempTeam.push(member);
    // setTeam(tempTeam);
    console.log("Team: ", team);
  }

  function editMember(member) {
    setMemberToEdit(member);
    console.log("Edit member: ", memberToEdit);
  }
  return (
    <div className="App">
      <Form addMember={updateTeam} memberToEdit={memberToEdit} />
      <div className="team-list">
        {team.map(teamMember => (
          <MemberCard member={teamMember} editButton={editMember} />
        ))}
      </div>
    </div>
  );
}

export default App;
