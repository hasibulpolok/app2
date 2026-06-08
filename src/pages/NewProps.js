import React from 'react'

export default function NewProps() {
  const person = { name: "rahim", age: 20, address: "Mirpur" };
  
  const { name, age } = person;

  return (
    <div>
      <p>Name : {name}</p> 
      <p>Age : {age}</p>
    </div>
  )
}