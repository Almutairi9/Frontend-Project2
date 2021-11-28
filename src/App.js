import React from "react";
import { Route, Routes } from "react-router-dom";
// import Nav from "./components/Nav";
// import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Landpage from "./components/LandPage";
import News from "./components/News";

function App() {
  const userInfo = localStorage.getItem("userInfo");
  return (
    <>
      {userInfo ? (
        <>
          <Routes>
            <Route exact path="/Profile" element={<Profile />} />
            <Route exact path="/News" element={<News />} />
          </Routes>
        </>
      ) : (
        <Routes> 
          <Route exact path="/" element={<Landpage />} />
          <Route exact path="/Signup" element={<Signup />} />
          <Route exact path="/Login" element={<Login />} />
        </Routes>
      )}
    </>
  );
}
export default App;
