import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost/my-app2/api/user_list.php").then((res) => {
      setUsers(res.data.mydata || res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="mb-3">User List</h3>

      <div className="card shadow-sm">
        <div className="card-body">
          <table className="table table-bordered table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user,index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.address}</td>
                  <td>{user.district}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
