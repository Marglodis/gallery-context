import React from "react";
import notfound from "../assets/img/sad.png";

import "../assets/css/galeria.css";

const NotFound = () => {
  return (
    
    <div className="notfound">
      <h1>404 Page Not Found</h1>
      <div>
        <img src={notfound} alt="notfound" />
        </div>
    </div>
    
  );
};

export default NotFound;