import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Landpage = () => {
  const navigate = useNavigate();
  return (
    <div className="contener">
      <div id="imgDev">
        <img
          id="landImg"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/0596ec34497725.56d349166493f.jpg"
          alt="landpic"
        />
        <div class="top-right">
          Technology Apps Get all the latest news and details of Technology News
          from India and across the world on mint. Let's Connect Now!
          <br />
          <br />
          <Link to="/Signup" class="btn">
            Sign up
          </Link>
          <Link to="/Login" class="btn">
            Login{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Landpage;
