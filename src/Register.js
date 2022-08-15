import React from "react";
import { useState } from "react";
const Register = () => {
  // States for registration
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //States for checking the errors
  const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false)
  //Handling the name change

  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  //Handling the email change

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  //Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };


  // Showing success message
  const successMessage =() => {
    return (
      <div className="success" style={{
        display: submitted ? '' : 'none',
      }}>
        <h3>User {name} successfully registered!</h3>
      </div>
    )
  }

  // Showing error message
  const errorMessage =() => {
    return (
      <div className="error" style={{
        display: error ? '' : 'none',
      }}>
        <p>Please enter all the fields</p>
      </div>
    )
  }

  return (
    <div className="form">
      <div>
        <h1>Registration Form</h1>
      </div>


{/* Calling to the methods */}

<div className="messages">
  {errorMessage()}
  {successMessage()}
</div>
      <form>
        <label className="label">
          Name:
          <input
            onChange={handleName}
            className="input"
            type="text"
            value={name}
          />
        </label>
        <label className="label">
          Email:
          <input
            onChange={handleEmail}
            className="input"
            type="text"
            value={email}
          />
        </label>
        <label className="label">
          Password:
          <input
            onChange={handlePassword}
            className="input"
            type="text"
            value={password}
          />
        </label>

        <button onClick={handleSubmit} className="btn" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
