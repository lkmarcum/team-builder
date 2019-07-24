import React, { useState, useEffect } from "react";

function Form(props) {
  const [member, setMember] = useState({});

  function handleChange(event) {
    const updatedMember = {
      ...member,
      [event.target.name]: event.target.value
    };
    console.log("handleChange", event.target.name, event.target.value);
    setMember(updatedMember);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Member: ", member);
    if (props.isEditing) {
      props.editMember(member);
    } else {
      props.addMember(member);
    }
  }

  useEffect(() => {
    setMember(props.memberToEdit);
  }, [props.memberToEdit]);

  return (
    <form onSubmit={event => handleSubmit(event)}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          value={member.username}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          name="email"
          placeholder="Enter email"
          value={member.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Role:
        <input
          type="text"
          name="role"
          placeholder="Enter role"
          value={member.role}
          onChange={handleChange}
        />
      </label>
      <button>Submit!</button>
    </form>
  );
}

export default Form;
