import React from 'react';
import img from "../../images/nai.gif"
import "./NotFound.css"

const NotFound = () => {
    return (
        <div>
            <h4 className="text-center mt-5">404 Not Found</h4>
            <img className="non-style my-5" src={img} alt="" />

        </div>
    );
};

export default NotFound;