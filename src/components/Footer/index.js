import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer-basic">
      <footer>
        <ul className="list-inline">
          <li className="list-inline-item">
            <Link to="/Support">Support</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/About">About us</Link>
          </li>
        </ul>
        <p className="copyright">News App © 2021</p>
      </footer>
    </div>
  );
};
export default Footer;
