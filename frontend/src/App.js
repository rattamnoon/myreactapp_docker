import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/products").then((res, err) => {
      if (err) {
        console.log(err);
      }
      setData(res.data);
    });
  }, []);

  return (
    <div>
      {data &&
        data?.map((element) => {
          return (
            <div key={element._id} style={{ textAlign: "center", margin: 5 }}>
              <h2>{`ชื่อ: ${element.productName}`}</h2>
              <p>{`ราคา: ${element.unitPrice}`}</p>
            </div>
          );
        })}
    </div>
  );
}

export default App;
