import React from "react";
import { Link } from "react-router-dom";
import errorPage from "../assets/images/error404.jpeg";

function Lost() {
  return (
    <div>
      <img className="errorPage" src={errorPage} />
      <p className="goToHome" style={{ textAlign: "right", fontSize: 80 }}>
        <Link to="/"> Want to Rejoin? </Link>
      </p>
    </div>
  );
}
export default Lost;
