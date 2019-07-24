import React from "react";

function MemberCard(props) {
  console.log("MemberCard: ", props.member);
  return (
    <div className="member-card">
      <h2>Username: {props.member.username}</h2>
      <h4>Email: {props.member.email}</h4>
      <h4>Role: {props.member.role}</h4>
      <button onClick={() => props.createEditButton(props.member)}>Edit</button>
    </div>
  );
}

export default MemberCard;
