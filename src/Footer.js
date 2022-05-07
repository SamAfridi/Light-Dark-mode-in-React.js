import React from "react";
import "./footer.css"
const Footer = (props) => {

    return (

    
 <>
        <div className="footer">
           
                <div className="footerBox" >
                    <div className="col-sm-3">
                        <h4>{props.get}</h4>
                        <p>{props.city}</p>
                        <p>{props.phone}</p>
                        <p> {props.email}</p>
                    </div>
                </div>
            
        </div>
</>
    


    );

};
export default Footer;