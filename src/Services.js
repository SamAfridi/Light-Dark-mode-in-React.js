import React from "react";
import "./services.css";
const Services = (props) => {
   
    return(
      <div className="row">
        <>
           <div className="main-Box">
                <div className="Box">
                    <h2>{props.serviceType}</h2>
                    <p>{props.ServicePara}</p>
                    <button type="submit" className="btn btn-default">{props.serviceButton}</button>
                </div>
           </div>
        </>
      </div>   
    );
};
export default Services;