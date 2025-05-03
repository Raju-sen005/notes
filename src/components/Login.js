import React, { useState } from 'react';

const Login = (props) => {
  const [Credential, setCrendential] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: Credential.email, password: Credential.password })
    });

    const json = await response.json();
    console.log(json);

    if (json.success) {
      localStorage.setItem('token', json.authtoken);
      props.showAlert("Logged in successfully", "success");
      window.location.href = "/";
    } else {
     props.showAlert("Invalid credentials", "danger");
    }
  };

  const onChange = (e) => {
    setCrendential({ ...Credential, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
        <h2>Login to your account</h2>
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={Credential.email}
            onChange={onChange}
            id="email"
            name="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text"></div>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={Credential.password}
            onChange={onChange}
            id="password"
            name="password"
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Login;
