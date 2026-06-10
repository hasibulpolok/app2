import React, { useState } from 'react'

export default function NewForm() {

    const[input,setInput] = useState({});
    console.log(input)

    function handlechange(e){
        const name = e.target.name;
        const value = e.target.value;
        setInput(values=> ( { ...values,[name]:value}))
    }
  return (
   <>
  <div className="container-fluid">
    <h1 className='display-3 text-primary'>New Form</h1>
     <form action=""></form>
   Name : <input width={100} type="text" name="fullname"  value={input.fullname} onChange={handlechange}/> <br /> <br />
   address:  <input  type="text" name="address" value={input.address} onChange={handlechange}/>
    Address 2:
        <textarea name="address2" value={input.address2} onChange={handlechange} />
  </div>
   
   </>
  )
}
