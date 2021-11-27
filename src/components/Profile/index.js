import axios from "axios";
import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useState } from "react";
// import Loading from "../Loading/loading";
// import ErrorMessage from "../errorMessage";
import "./style.css";

const Profile = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [userName, setName] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const SubmitHandler = async (e) => {
    e.preventDefault();
    // console.log(email);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      setLoading(true);
      console.log(userInfo._id);
      const { data } = await axios.put(
        `https://backend-project2.herokuapp.com/users/update/${userInfo._id}`,
        {
          userName,
          email,
          password,
          phoneNumber,
          age,
        },
        config
      );
      console.log(data);
      setLoading(false);

      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <Container>
      <div className="container">
        {/* {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
          {loading && <Loading />} */}
        <form className="login" onSubmit={SubmitHandler}>
          <h1>Profile Page </h1>

          <hr />
          <label for="userName">
            <b>User Name </b>
          </label>
          <input
            type="text"
            defultvalue={userName}
            name="name"
            id="name"
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
            onChange={(e) => setPassword(e.target.value)}
          />
          <label for="pho">
            <b>phone</b>
          </label>
          <input
            type="text"
            value={phoneNumber}
            placeholder="Enter phone"
            name="pho"
            id="pho"
            onChange={(e) => setPhone(e.target.value)}
          />
          <label for="age">
            <b>Age </b>
          </label>
          <input
            type="text"
            value={age}
            placeholder="Enter Age"
            name="Age"
            id="Age"
            onChange={(e) => setAge(e.target.value)}
          />
          {/* <label for="img">
            <b>Select image:</b>
          </label>
          <input
            type="file"
            value={pic}
            id="img"
            name="img"
            accept="image/*"
            onChange={(e) => setPic(e.target.value)}
          />{" "}
          <input type="submit" /> */}
          <hr />
          <button type="submit" className="registerbtn">
            update
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Profile;
