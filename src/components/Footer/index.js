import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Footer = () => {
  return (
    <div class="footer-basic">
      <footer>
        <div class="social">
          <a href="#">
            <i class="icon ion-social-instagram"></i>
          </a>
          <a href="#">
            <i class="icon ion-social-snapchat"></i>
          </a>
          <a href="#">
            <i class="icon ion-social-twitter"></i>
          </a>
          <a href="#">
            <i class="icon ion-social-facebook"></i>
          </a>
        </div>
        <ul class="list-inline">
          <li class="list-inline-item">
            <Link to="/">Home</Link>
          </li>
          <li class="list-inline-item">
            <Link to="/Profile">Profile</Link>
          </li>
          <li class="list-inline-item">
            <Link to="/About">About us</Link>
          </li>
        </ul>
        <p class="copyright">News App © 2021</p>
      </footer>
    </div>
  );
};
export default Footer;
