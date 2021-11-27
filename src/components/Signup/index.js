import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../Loading/loading";
import ErrorMessage from "../errorMessage";
import "./style.css";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [userName, setName] = useState("");
  const [pic, setPic] = useState(
    "https://thumbs.dreamstime.com/b/female-user-avatar-profile-picture-icon-isolated-vector-illustration-flat-design-people-character-white-background-woman-146472409.jpg"
  );
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  /////////////

  useEffect(() => {
    ///// Hocks
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
      navigate("/News"); ///// news page
    }
  }, []);

  const SubmitHandler = async (e) => {
    e.preventDefault();
    console.log(email);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      setLoading(true);

      const { data } = await axios.post(
        "https://backend-project2.herokuapp.com/users",
        {
          userName,
          email,
          password,
          phone,
          age,
        },
        config
      );
      console.log(data);
      setLoading(false);
      navigate("/News");
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="container">
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {loading && <Loading />}
      <form className="login" onSubmit={SubmitHandler}>
        <h1>Signup</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />
        <label for="userName">
          <b>User Name :</b>
        </label>
        <input
          type="text"
          value={userName}
          placeholder="Enter User Name"
          name="name"
          id="name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <label for="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          value={email}
          placeholder="Enter Email"
          name="email"
          id="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label for="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          value={password}
          placeholder="Enter Password"
          name="psw"
          id="psw"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <label for="pho">
          <b>phone</b>
        </label>
        <input
          type="text"
          value={phone}
          placeholder="Enter phone"
          name="pho"
          id="pho"
          required
          onChange={(e) => setPhone(e.target.value)}
        />
        <label for="age">
          <b>Age :</b>
        </label>
        <input
          type="text"
          value={age}
          placeholder="Enter Age"
          name="Age"
          id="Age"
          required
          onChange={(e) => setAge(e.target.value)}
        />
        <hr />
        <button type="submit" className="registerbtn">
          signin
        </button>
        <div className="container signin">
          <p>
            Already have an account?{" "}
            <button className="log" onClick={() => navigate(`/Login`)}>
              Login{" "}
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};
export default Signup;
