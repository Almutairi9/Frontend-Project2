import React from "react";
import { useNavigate } from "react-router";
import "react-bootstrap";
// import { useEffect } from "react";
import "./style.css";

const Nav = () => {

  const navigate = useNavigate();
  const logOut = () => {
    navigate(`/`);
    localStorage.clear();
    window.location.reload(false);
    console.log("log out");
  };
  return (
    <div>
      <header className="header">
        <nav className="navbar">
          <img src="/Newss.jpg" alt="News Logo" className="nav-logo"/>
          <ul className="nav-menu">
            <li className="nav-item">
              <button
                class="btn btn-primary"
                type="submit"
                onClick={() => navigate(`/Profile`)}
              >
                my profile{" "}
              </button>
              {/* <button class="btn btn-primary" onClick={() => navigate(`/Profile`)}>my profile </button> */}
            </li>
            <li className="nav-item">
              <button class="btn btn-primary" type="submit" onClick={logOut}>
                Log out
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
