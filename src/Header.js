import React from "react";
import "./header.css";

const User = (props) => {

  return ( 
    <>
{/* switch button start // */}
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
<div className={`form-check form-switch m-3 text ${props.mode==='light'? 'dark' : 'light'}`}>
  <input onClick={props.toggle} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.text}</label>
</div>

{/* switch button End */}
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"> {props.HomeText} </a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
        </li>
      </ul>
      <ul className="nav navbar-nav navbar-right p-2">
              <li>
                <h1>{props.logo}</h1>
              </li>
            </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    

      
    </>
  );
};

export default User;
