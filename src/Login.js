import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      {/* Melody Logo */}
      <h1>Welcome to Melody</h1>
      {/* Login With Spotify Button */}
      <a href={loginUrl}>Login With Spotify</a>
    </div>
  );
}

export default Login;
