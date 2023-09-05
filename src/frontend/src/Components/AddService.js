import { useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function AddService() {
  const navigate = useNavigate();
  const id = useParams();
  console.log(id);
  const init = {
    id: 1,
    name: "",
    description: "",
    price: "",
    businessId: id,
    loginId: 0,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        return { ...state, [action.fld]: action.val };
      case "reset":
        return init;
    }
  };
  const [info, dispatch] = useReducer(reducer, init);

  const [services, setServices] = useState([]);

  

  const dropServices = () => {
    fetch(`https://localhost:7176/api/Services`)
      .then((resp) => resp.json())
      .then((services) => setServices(services));
      console.log(services)
  };

  const sendData = (e) => {
    e.preventDefault();
    const reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(info),
    };
    console.log(reqOptions);
    fetch("https://localhost:7176/saveClientRegister", reqOptions).then(
      (resp) => {
        if (resp != null) {
          navigate("/addservice");
        }
      }
    );
  };

  return (
    <div>
      <h4>Enter Service Detail :</h4>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Enter Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={info.name}
            onChange={(e) => {
              dispatch({
                type: "update",
                fld: "name",
                val: e.target.value,
              });
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Enter Description
          </label>
          <input
            type="description"
            className="form-control"
            id="description"
            name="description"
            value={info.description}
            onChange={(e) => {
              dispatch({
                type: "update",
                fld: "description",
                val: e.target.value,
              });
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Enter Price
          </label>
          <input
            type="text"
            className="form-control"
            id="price"
            name="price"
            value={info.price}
            onChange={(e) => {
              dispatch({ type: "update", fld: "price", val: e.target.value });
            }}
          />
        </div>

        <div>
          <select
            name="serviceId"
            className="form-select"
            id="serviceId"
            onClick={dropServices}
            onChange={(e) => {
              dispatch({
                type: "update",
                fld: "serviceId",
                val: e.target.value,
              });
            }}
          >
            <option selected>Select Service Type</option>
            {services.map((v) => {
                return (<option key={v.id} value={v.id} > {v.serviceName} </option>
              );
            })}
          
          </select>
        </div>

        <button
          type="submit"
          className="btn btn-primary mb-3"
          onClick={(e) => {
            sendData(e);
          }}
        >
          register
        </button>

        <button
          type="reset"
          className="btn btn-primary mb-3 "
          onClick={() => {
            dispatch({ type: "reset" });
          }}
        >
          Clear
        </button>
      </form>
    </div>
  );
}
