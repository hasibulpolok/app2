import axios from "axios";
import React, { useState } from "react";

export default function NewForm() {
  const [input, setInput] = useState({});
  console.log(input);

  function handlechange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setInput((values) => ({
      ...values,
      [name]: value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost/my-app2/api/user_create.php", input)
      .then((res) => {
        console.log("Data Sent:", res.data);
        alert("Data Inserted Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container-fluid">
        <h1 className="display-3 text-primary">New Form</h1>

        <form onSubmit={handleSubmit}>
          Name :{" "}
          <input
            width={100}
            type="text"
            name="fullname"
            value={input.fullname || ""}
            onChange={handlechange}
          />
          <br />
          <br />

          Gender : <br />
          Male:{" "}
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={input.gender === "Male"}
            onChange={handlechange}
          />
          <br />
          Female:{" "}
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={input.gender === "Female"}
            onChange={handlechange}
          />

          <br />
          <br />

          District:
          <br />
          <select
            name="district"
            value={input.district}
            onChange={handlechange}
          >
            <option value="">Select One</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Barishal">Barishal</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Nilphamari">Nilphamari</option>
            <option value="Madaripur">Madaripur</option>
            <option value="Gaibandha">Gaibandha</option>
            <option value="Feni">Feni</option>
          </select>

          <br />
          <br />

          Address 2:
          <textarea
            name="address2"
            value={input.address2}
            onChange={handlechange}
          />

          <br />
          <br />

          <button onClick={handleSubmit} type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}