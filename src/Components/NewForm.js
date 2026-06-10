import React, { useState } from "react";

export default function NewForm() {
  const [input, setInput] = useState({});
  console.log(input);

  function handlechange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  }
  return (
    <>
      <div className="container-fluid">
        <h1 className="display-3 text-primary">New Form</h1>
        <form action=""></form>
        Name :{" "}
        <input
          width={100}
          type="text"
          name="fullname"
          value={input.fullname}
          onChange={handlechange}
        />{" "}
        <br /> <br />
        Gender : <br />
    Male: <input type="radio" name="gender" value="Male" checked={input.gender === 'Male'} onChange={handlechange}/> <br />
    Female: <input type="radio" name="gender" value="Female" checked={input.gender === 'Female'} onChange={handlechange}/>

        <br />
        <br />
        address:{" "}
        <input
          type="text"
          name="address"
          value={input.address}
          onChange={handlechange}
        />{" "}
        <br /> <br />
        Address 2:
        <textarea
          name="address2"
          value={input.address2}
          onChange={handlechange}
        />
        <br />
        district: <br />
        <select name="district" id="" onChange={handlechange}>
          <option value="">Select One</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Barishal">Barishal</option>
          <option value="Rangpur">Rangpur</option>
          <option value="Nilphamari">Nilphamari</option>
          <option value="Madaripur">Madaripur</option>
          <option value="Gaibandha">Gaibandha</option>
          <option value="Feni">Feni</option>
        </select>
        <br /> <br />
      </div>
    </>
  );
}
