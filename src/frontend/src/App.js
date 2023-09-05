import "./App.css";

import { Link, Route, Routes } from "react-router-dom";
import LoginComp from "./Components/LoginComp";
import Home from "./Components/homepageComp";
import ClientRegister from "./Components/CRegister";
import BusinessRegister from "./Components/BRegister";
import ClientComp from "./Components/ClientComp";
import SuccessfulReg from "./Components/SuccessfulRegComp";
import DecorationComp from "./Components/Decoration";
import CateringComp from "./Components/CateringComp";
import VenueComp from "./Components/VenueComp";
import BServiceComp from "./Components/BServiceComp";
import BuyWindow from "./Components/Buy";
import Payments from "./Components/Payement";
import About from "./Components/About";
import Admin from "./Components/AdminManage";
import AdminClientsComp from "./Components/AdminClients";
import AdminBusinesssComp from "./Components/AdminService";
import AdminBusinessServiceComp from "./Components/AdminBusinessService";
import BusinessComp from "./Components/BusinessComp";
import AddService from "./Components/AddService";
import AdminHome from "./Components/AdminHome";
import GetAllClients from "./Components/GetAllClients";
import GetAllBusiness from "./Components/GetAllBusiness";
import GetAllServices from "./Components/GetAllServices";
import AdminManage from "./Components/AdminManage";
import AllInfo from "./Components/AllInfo";

function App() {
  return (
    <div className="App">
      <header className="header container-fluid">
        <div>
          <h1 style={{ backgroundColor: "red" }}>
            Welcome to Event Managment System
          </h1>
        </div>

        <nav className="navbar navbar-expand-sm bg-light mb-3">
          <div className="container-fluid navbar-dark bg-dark">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link to="/" className="nav-link px-3">
                  Home
                </Link>
              </li>
              {/* <li className="nav-item">
                  <Link to="/" className="nav-link px-3">Login</Link>
                </li> */}

              <li className="nav-item">
                <Link to="/about" className="nav-link px-3">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/adminhome" className="nav-link px-3">
                  Admin Home
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <Routes>
        {/* <Route path="/login" element={<Login2/>}/> */}
        <Route path="/" element={<LoginComp />} />

        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/business" element={<BusinessComp />} />
        <Route path="/cregister" element={<ClientRegister />} />
        <Route path="/bregister" element={<BusinessRegister />} />
        <Route path="/clientpage" element={<ClientComp />} />
        <Route path="/SuccessReg" element={<SuccessfulReg />} />
        <Route path="decoration" element={<DecorationComp />} />
        <Route path="/catering" element={<CateringComp />} />
        <Route path="/venue" element={<VenueComp />} />
        <Route path="/bservice/:id" element={<BServiceComp />} />
        <Route path="/buy/:id" element={<BuyWindow />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/about" element={<About />} />
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/clientss" element={<AdminClientsComp />} />
        <Route path="/servicess" element={<AdminBusinesssComp />} />
        <Route path="/allservices" element={<AdminBusinessServiceComp />} />
        <Route path="/business" element={<BusinessComp />} />
        <Route path="/addservice/:id" element={<AddService />} />
        <Route path="/getallclients" element={<GetAllClients />} />
        <Route path="/getallbusiness" element={<GetAllBusiness />} />
        <Route path="/getallservices" element={<GetAllServices />} />
        <Route path="/adminmanage" element={<AdminManage />} />
        <Route path="/allinfo" element={<AllInfo />} />
      </Routes>
    </div>
  );
}

export default App;
