import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BusinessComp() {
  const [services, setServices] = useState([]);
  const [business,setBusiness] = useState({})

  const id = JSON.parse(localStorage.getItem("loggedUser"));

  const getServices = () => {
    fetch(`https://localhost:7176/getBusinessServices/${id.id}`)
      .then((resp) => resp.json())
      .then((services) => setServices(services));
  };

  const getBusiness = ((id) => {
    fetch(`https://localhost:7176/getbusinessbylogin/${id.id}`)
    .then(resp => resp.json())
    .then(business => setBusiness(business))
    console.log(business)
  })

  useEffect(() => {
    getServices();
    getBusiness(id)
  }, []);

  const deleteService = async (id) => {
    console.log("Item deleted");
    await axios.delete(`https://localhost:7176/api/BuisnessServices/${id}`);
    getServices();
  };
  return (
    <div>
      <h1>IN Business Class </h1>
      <div style={{ textAlign: "center" }}>
        <h1>Catering Services</h1>

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
                Delete
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
                
                <td>
                  <button
                    className="btn btn-outline-primary mx-2"
                    onClick={() => deleteService(v.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <Link to={`/addservice/${business.id}`} className="btn btn-outline-primary mx-2">
          Add New Service
        </Link>
      </div>
    </div>
  );
}
