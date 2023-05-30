import React from "react";
import "../index.css";
import errorImage from "./../public/server.jpeg";
function error() {
  return (
    <div className="error-page">
      <img src={errorImage} alt="" style={{ width: 600, height: 400 }}></img>
      <span>Failed to connect to Server</span>
    </div>
  );
}

export default error;
