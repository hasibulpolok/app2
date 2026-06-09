import React from "react";

export default function Events() {
  const shoot = (a) => {
    alert(a);
  };
  const Today = "Tuesday";

  return (
    <div className="container-fluid">
      <div className="mb-2">Events</div>
      <button onClick={() => shoot("Goal!")}>Click Me</button> 
      <br />
      {(Today == "Tuesday" ? "Office is open" : "Office is closed")}; 
      <br />
      {Today == "Friday" && "Office is closed"}
    </div>
  );
}
