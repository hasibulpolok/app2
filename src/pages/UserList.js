import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/my-app2/api/user_list.php")
      .then((res) => {setUsers(res.data);
        console.log(res.data)
      })
  }, []);

  return (
   <>
   
   </>
  );
}