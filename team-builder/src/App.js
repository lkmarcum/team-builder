import React, { useState } from "react";
import Form from "./Form";
import MemberCard from "./MemberCard";
import "./App.css";

function App() {
  const [team, setTeam] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState();

  function updateTeam(member) {
    const tempTeam = [...team, member];
    setTeam(tempTeam);
    setIsEditing(false);
  }

  function createEditMember(member) {
    setMemberToEdit(member);
    setIsEditing(true);
    setEditIndex(team.indexOf(member));
  }

  function editMember(memberEdit) {
    const tempEdit = [...team];
    tempEdit[editIndex] = memberEdit;
    setTeam(tempEdit);
    setIsEditing(false);
  }

  return (
    <div className="App">
      <Form
        addMember={updateTeam}
        memberToEdit={memberToEdit}
        editMember={editMember}
        isEditing={isEditing}
      />
      <div className="team-list">
        {team.map(teamMember => (
          <MemberCard member={teamMember} createEditButton={createEditMember} />
        ))}
      </div>
    </div>
  );
}

export default App;
