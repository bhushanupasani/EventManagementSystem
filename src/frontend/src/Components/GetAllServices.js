import { useEffect, useState } from "react";

export default function GetAllServices() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/getallservices`)
      .then((resp) => resp.json())
      .then((services) => setServices(services));
  }, []);

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>List of All services Registered By Buisnesses on the System </h1>

        <table
          style={{
            margin: "0 auto",
            borderCollapse: "collapse",
            border: "1px solid #ccc",
            width: "70%",
          }}
        >
          <thead>
            <tr>
              <th style={{ border: "1px solid #ccc" }} scope="col">
                No.
              </th>
              <th style={{ border: "1px solid #ccc" }} scope="col">
                Service Name
              </th>
              <th style={{ border: "1px solid #ccc" }} scope="col">
                Service Description
              </th>
              <th style={{ border: "1px solid #ccc" }} scope="col">
                Price
              </th>
              <th style={{ border: "1px solid #ccc" }} scope="col">
                Business Name
              </th>
            </tr>
          </thead>
          <tbody>
            {services.map((v, index) => (
              <tr key={v.id}>
                <td style={{ border: "1px solid #ccc" }}>{v.id}</td>
                <td style={{ border: "1px solid #ccc" }}>{v.name}</td>
                <td style={{ border: "1px solid #ccc" }}>{v.description}</td>
                <td style={{ border: "1px solid #ccc" }}>{v.price}</td>
                <td style={{ border: "1px solid #ccc" }}>{v.business.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
