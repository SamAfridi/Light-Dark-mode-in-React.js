import React from "react";
import "./paragraph.css";


const Paragraph = (props) => {

    return (
        <>
            <div className="para">
                <h1>{props.headingOne}</h1>
                <h2>{props.headingTwo}</h2>
                <h5>{props.paraHeading}</h5>
            </div>

        </>
    );
};
export default Paragraph;