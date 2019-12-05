import React from "react";
import Cookie from "js-cookie";
import { Redirect } from "react-router-dom";

import "./signin.css";

const Signin = props => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error_ms, setError_ms] = React.useState("");

  const token = Cookie.get("jwt");
  if (token) window.location = "/";

  const collectInputEmail = event => setEmail(event.target.value);
  const collectInputPasswordl = event => setPassword(event.target.value);

  const validation = () => {
    let flag = true;
    if (email === "") {
      setError_ms("* email input must be valide");
      flag = false;
    } else if (password === "") {
      setError_ms("** password input must be valide");
      flag = false;
    }
    return flag;
  };

  const user = { email, password };

  const handleSubmit = event => {
    event.preventDefault();

    if (validation()) {
      fetch("/api/signin", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(props.setLogedin(true));
    }
  };

  const redirect = () => {
    console.log(props.logedin);
    return props.logedin;
  };

  return (
    <form className="signin_form" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="email"
          className="email_input"
          placeholder="Email"
          onChange={collectInputEmail}
        />
      </div>

      <div>
        <input
          type="password"
          name="password"
          className="password_input"
          placeholder="Password"
          onChange={collectInputPasswordl}
        />
      </div>

      <div>
        {" "}
        <span className="error">{error_ms}</span>
      </div>
      <br></br>

      {redirect() ? (
        <a href="/admin">
          {" "}
          <input className="signin_button" value="Sign In" />
          <br></br>
          go
        </a>
      ) : (
        <input type="submit" className="signin_button" value="Sign In" />
      )}
    </form>
  );
};
export default Signin;
