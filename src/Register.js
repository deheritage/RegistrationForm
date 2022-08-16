import React from "react";
import { useState } from "react";
const Register = () => {
  // States for registration
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [cPasswordError, setCPasswordError] = useState(false);
  
  
  //Handling the name change
 const handleName = (e) => {
    setFirstName(e.target.value);
    setSubmitted(false);
  };

  //Handling the last name change
  const handleLastName = (e) => {
    setLastName(e.target.value);
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

  // Handling the confirm password change
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setSubmitted(false);
  };

  //Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
     if (password !== confirmPassword ) {
    return   setCPasswordError(true);
    }

    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === "" ||
      confirmPassword ===""
    ) {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);  
      setCPasswordError(false);
    } 
   
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h3>User successfully registered!</h3>
      </div>
    );
  };

  // Showing error message
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <p>Please enter all the fields</p>
      </div>
    );
  };

  // Showing error confirm password
  const errorPassword = () =>{
return (
  <div className="errorPwrd" style={{
    display: cPasswordError ? "" : "none",
  }} >
<p>Confirm Password</p>
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
          First Name:
          <input
            onChange={handleName}
            className="input"
            type="text"
            placeholder="Enter First Name"
            value={firstName}
          />
        </label>
        <label className="label">
          Last Name:
          <input
            onChange={handleLastName}
            className="input"
            type="text"
            placeholder="Enter Last Name"
            value={lastName}
          />
        </label>
        <label className="label">
          Email:
          <input
            onChange={handleEmail}
            className="input"
            type="text"
            placeholder="Enter Email"
            value={email}
          />
        </label>
        <label className="label">
          Password:
          <input
            onChange={handlePassword}
            className="input"
            type="text"
            pattern="[a-zA-Z0-9-]+" required
            placeholder="Enter Password"
            value={password}
          />
        </label>
        <label className="label">
          Confirm password:
          <input
            onChange={handleConfirmPassword}
            className="input"
            type="text"
            pattern="[a-zA-Z0-9-]+ " required
            placeholder="Enter Confirm Password"
            value={confirmPassword}
           
          />
            {errorPassword()}
        </label>

        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
