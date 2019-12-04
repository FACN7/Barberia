import React from "react";
import "./signin.css";

const Signin = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error_ms, setError_ms] = React.useState("");

  const collectInputEmail = event => setEmail(event.target.value);
  const collectInputPasswordl = event => setPassword(event.target.value);

  console.log(email);
  console.log(password);

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
      });
    }
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

      <input type="submit" className="signin_button" value="Sign In" />
    </form>
  );
};
export default Signin;
