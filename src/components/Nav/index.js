import React from "react";
import { useNavigate } from "react-router";
import "react-bootstrap";
import { Link } from "react-router-dom";

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
  
          <div class="top-right">

            <Link to="/Signup" class="btn">Sign up</Link>
            <Link to="/Signup" class="btn">Sign up</Link>
</div>
              {/* <button class="btn btn-primary" onClick={() => navigate(`/Profile`)}>my profile </button> */}
           
        </nav>
      </header>
    </div>
  );
};

export default Nav;
