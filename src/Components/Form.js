import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  console.log(name);

  const handleValue = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <div className="container-fluid">
      <h1 className="display-3 text-primary">Form</h1>

      <form className="d-flex flex-column" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter Your Name :</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleValue}
          placeholder="Name"
        />

        <br />

        <label htmlFor="id">Enter Your ID :</label>
        <input type="number" id="id" value={id} placeholder="ID" />

        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
