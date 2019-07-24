import React from "react";

function MemberCard(teamMember) {
  console.log("MemberCard: ", teamMember);
  return (
    <div className="member-card">
      <h2>{teamMember.teamMember.username}</h2>
      <h4>{teamMember.teamMember.email}</h4>
      <h4>{teamMember.teamMember.role}</h4>
      <button>Edit</button>
    </div>
  );
}

export default MemberCard;
