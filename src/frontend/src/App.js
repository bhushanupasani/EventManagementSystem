
import './App.css';

import { Link, Route, Routes} from 'react-router-dom';
import LoginComp from './Components/LoginComp';
import Home from './Components/homepageComp';
import Login2 from './Components/lopgin';
import Business from './Components/BusinessComp';
import ClientRegister from './Components/CRegister';
import BusinessRegister from './Components/BRegister';

function App() {
  return (
  
     
   <div className="App">
      <header className="header container-fluid">
    <div>
      <h1 style={{backgroundColor:'red'}}>Welcome to EventManagmentSystem</h1>
    </div>


      <nav className='navbar navbar-expand-sm bg-light mb-3'>
            <div className="container-fluid navbar-dark bg-dark">
              
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <Link to="/" className="nav-link px-3">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link px-3">Login</Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link px-3">Register</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link px-3">About</Link>
                </li>
                <li className="nav-item">
                  <Link to="/business" className="nav-link px-3  ">Business</Link>
                </li>
              </ul>

            </div>
        </nav>
       

    
   
</header>
<Routes>
        {/* <Route path="/login" element={<Login2/>}/> */}
        <Route path="/login" element={<LoginComp/>}/>

        <Route path="/" element={<Home/>}/>
        <Route path="/business" element={<Business/>}/>
        <Route path="/cregister" element={<ClientRegister/>}/>
        <Route path="/bregister" element={<BusinessRegister/>}/>
       

 </Routes>
</div>

  );
}

export default App;

