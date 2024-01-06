// imports
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/UserContext";

const Navbar = () => {
  const { value, setValue } = useContext(AppContext);

  return (
    <div>
      <div className="nav flex">
        <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
          <div className="flex logodiv">
            <img
              src="https://kalvium.community/images/sidebar-3d-logo.svg"
              alt=""
            />
            <h3 style={{ marginLeft: "6px", color:"black" }}>Kalvium Books </h3>
          </div>{" "}
        </Link>
        <input
          type="text"
          className="input"
          placeholder="Search Books"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <Link to="/form">
          <button className="register">Register </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
