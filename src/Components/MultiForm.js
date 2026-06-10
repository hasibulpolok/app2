import React, { useState } from "react";

export default function MultiForm() {
  const [inputs, setInputs] = useState({
    name: "",
    id: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Form Data:", inputs);

   
  }

  return (
    <div className="container-fluid">
      <h1>MultiForm</h1>

      <div className="container-fluid">
        <h1 className="display-3 text-primary">Form</h1>

        <form className="d-flex flex-column" onSubmit={handleSubmit}>
          <label htmlFor="name">Enter Your Name :</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={inputs.name}
            onChange={handleChange}
          />

          <br />

          <label htmlFor="id">Enter Your ID :</label>
          <input
            type="number"
            id="id"
            name="id"
            placeholder="ID"
            value={inputs.id}
            onChange={handleChange}
          />

          <br />

          <input type="submit" value="Submit" />
        </form>

        <hr />

        <h3>Preview</h3>
        <p>
          <strong>Name:</strong> {inputs.name}
        </p>
        <p>
          <strong>ID:</strong> {inputs.id}
        </p>
      </div>
    </div>
  );
}