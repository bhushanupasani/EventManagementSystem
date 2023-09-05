import { useEffect, useState } from "react";

export default function GetAllBusiness() {
  const [business, setBusiness] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/getallbusiness`)
      .then((resp) => resp.json())
      .then((business) => setBusiness(business));
  }, []);

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>List of All Businesses Registered on the System </h1>

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
                Business Name
              </th>
              <th style={{ border: "1px solid #ccc" }} scope="col">
                Business Email
              </th>
              <th style={{ border: "1px solid #ccc" }} scope="col">
                Contact
              </th>
              <th style={{ border: "1px solid #ccc" }} scope="col">
                Registration Number
              </th>
            </tr>
          </thead>
          <tbody>
            {business.map((v, index) => (
              <tr key={v.id}>
                <td style={{ border: "1px solid #ccc" }}>{v.id}</td>
                <td style={{ border: "1px solid #ccc" }}>{v.name}</td>
                <td style={{ border: "1px solid #ccc" }}>{v.email}</td>
                <td style={{ border: "1px solid #ccc" }}>{v.contact_number}</td>
                <td style={{ border: "1px solid #ccc" }}>
                  {v.registration_number}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
