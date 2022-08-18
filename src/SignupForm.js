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
  console.log(formData, "formData for sign up");

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
      <h1>Sign Up</h1>
      {errorState.length > 0 && (
        <div>
          {errorState.map((error) => (
            <p>{error}</p>
          ))}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <span>
          <input
            onChange={handleChange}
            name="username"
            placeholder="username"
            value={(formData.username)}
          ></input>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="password"
            value={(formData.password)}
          ></input>
          <input
            onChange={handleChange}
            name="firstName"
            placeholder="first name"
            value={(formData.firstName)}
          ></input>
          <input
            onChange={handleChange}
            name="lastName"
            placeholder="last name"
            value={(formData.lastName)}
          ></input>
          <input
            onChange={handleChange}
            name="email"
            placeholder="email"
            value={(formData.email)}
          ></input>
          <button className="SignupForm-submit">sign up</button>
        </span>
      </form>
    </div>
  );
}

export default SignupForm;
