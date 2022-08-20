import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './SignupForm.css';

/**form to sign up a new user
 *
 * Props:
 * -signup: fn called in parent
 *
 * State:
 * -formData
 *
 * RouteList -> SignupForm
 */

function SignupForm({ signup }) {
  const navigate = useNavigate();
  console.log("SignupForm");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const [errorState, setErrorState] = useState([]);

  /** Update form input. */
  function handleChange(evt) {
    const input = evt.target;
    setFormData((formData) => ({
      ...formData,
      [input.name]: input.value,
    }));
  }

  //TODO:try/catch to display error messages
  /** Call parent function. */
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await signup(formData);
      navigate("/companies");
    } catch (err) {
      setErrorState(err);
    }
  }
  //TODO:bootstrap format for error message
  return (
    <div className="SignupForm">
      <h1 className="SignupForm-title">Sign Up</h1>
      <form className="SignupForm-inputs" onSubmit={handleSubmit}>
        
          <input
            onChange={handleChange}
            name="username"
            placeholder="username"
            value={(formData.username)}
            autoComplete="on"
          ></input>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="password"
            value={(formData.password)}
            autoComplete="on"
          ></input>
          <input
            onChange={handleChange}
            name="firstName"
            placeholder="first name"
            value={(formData.firstName)}
            autoComplete="on"
          ></input>
          <input
            onChange={handleChange}
            name="lastName"
            placeholder="last name"
            value={(formData.lastName)}
            autoComplete="on"
          ></input>
          <input
            onChange={handleChange}
            name="email"
            placeholder="email"
            value={(formData.email)}
            autoComplete="on"
          ></input>
          <button className="SignupForm-submit">Sign Up</button>
        
      </form>
      {errorState.length > 0 && (
        <div>
          {errorState.map((error) => (
            <b className="SignupForm-error">{error}</b>
          ))}
        </div>
      )}
    </div>
  );
}

export default SignupForm;
