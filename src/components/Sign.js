import React,{useState} from 'react'
import { Link } from 'react-router-dom';

const Sign = (props) => {
    const [Credential, setCrendential] = useState({ name:"", email: "", password: "", cpassword: "" });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
   const {name, email, password} = Credential
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    });

    const json = await response.json();
    console.log(json);

    if (json.success) {
      localStorage.setItem('token', json.authtoken);
      window.location.href = "/";
      props.showAlert("Account created successfully", "success");
    } else {
      props.showAlert("Invalid credentials", "danger");
    }
  };

  const onChange = (e) => {
    setCrendential({ ...Credential, [e.target.name]: e.target.value });
  };
  return (
    <div className='container my-3'>
    <h2>Create a your account</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" name='name' onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name='email' onChange={onChange} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name='password' onChange={onChange} minLength={5} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" id="cpassword" name='cpassword' onChange={onChange} minLength={5} required/>
  </div>
  Already have a account?<Link to="/login">Login in</Link><br />
  <button type="submit" className="btn btn-primary my-3">Submit</button>
</form>
    </div>
  )
}

export default Sign
