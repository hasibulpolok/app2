import React from "react";

export default function List() {
  const cars = ["Ford", "Bmw", "Audi", "Mercidies"];

  return (
    <>
      <div className="container-fluid">
        <h1 className="display-4">Mapping List Of Car.</h1>
        <ul>
          {cars.map((car) => {
            return <li style={{ listStyleType: "number" }}>I am {car}</li>;
          })}
        </ul>
      </div>
    </>
  );
}
