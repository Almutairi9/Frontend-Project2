import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/loading"; 
import ErrorMessage from "../errorMessage";
import "./style.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  // const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  /////////////// to news page

  useEffect(() => {
    ///// Hocks
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (userInfo) {
      navigate("/News"); ///// news page
    } 
  }, []);

  //////////////////

  const SubmitHandler = async (e) => {
    e.preventDefault();
    console.log(password, email);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      setLoading(true);

      const { data } = await axios.post(
        "https://backend-project2.herokuapp.com/users/login",
        {
          email,
          password,
        },
        config
      );

      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate('/News');
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };
  return (
    <div className="container">
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {loading && <Loading />}
      <form className="login" onSubmit={SubmitHandler}>
        <h1>Login</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />

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
        <hr />
        <button type="submit" className="registerbtn">
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;