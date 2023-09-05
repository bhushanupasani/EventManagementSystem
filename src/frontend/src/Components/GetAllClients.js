import { useEffect, useState } from "react";

export default function GetAllClients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/getallclients`)
      .then((resp) => resp.json())
      .then((clients) => setClients(clients));
  }, []);

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>List of All clients Registered on the System </h1>

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
                Client Name
              </th>
              <th style={{ border: "1px solid #ccc" }} scope="col">
                Client Email
              </th>
              <th style={{ border: "1px solid #ccc" }} scope="col">
                Contact
              </th>
            </tr>
          </thead>
          <tbody>
            {clients.map((v, index) => (
              <tr key={v.id}>
                <td style={{ border: "1px solid #ccc" }}>{v.id}</td>
                <td style={{ border: "1px solid #ccc" }}>{v.name}</td>
                <td style={{ border: "1px solid #ccc" }}>{v.email}</td>
                <td style={{ border: "1px solid #ccc" }}>{v.contact_number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
