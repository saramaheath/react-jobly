import React, { useState } from "react";
/**form to signing up a new user
 *
 * Props:
 * -signup: fn called in parent
 *
 * State:
 * -formData
 */

function SignupForm({ signup }) {
  console.log("SignupForm");
  const [formData, setFormData] = useState({});

  /** Update form input. */
  function handleChange(evt) {
    const input = evt.target;
    setFormData((formData) => ({
      ...formData,
      [input.name]: input.value,
    }));
  }

  /** Call parent function. */
  function handleSubmit(evt) {
    evt.preventDefault();
    signup(formData);
  }

  return (
    <form className="SignupForm" onSubmit={handleSubmit}>
      <span>
        <input
          onChange={handleChange}
          name="username"
          placeholder="username"
        ></input>
        <input
          onChange={handleChange}
          name="password"
          placeholder="password"
        ></input>
        <input
          onChange={handleChange}
          name="firstName"
          placeholder="First Name"
        ></input>
        <input
          onChange={handleChange}
          name="lastName"
          placeholder="Last Name"
        ></input>
        <input onChange={handleChange} name="email" placeholder="email"></input>
        <button>sign up</button>
      </span>
    </form>
  );
}

export default SignupForm;
