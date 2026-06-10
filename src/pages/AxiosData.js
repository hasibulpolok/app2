import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AxiosData() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setDatas(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container-fluid">
      <h2 className="display-2 text-primary">
        Displaying Data From API
      </h2>

      {datas.map((data) => (
        <div key={data.id}>
          <h4>{data.title}</h4>
          <p>{data.body}</p>
        </div>
      ))}
    </div>
  );
}