import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

/**form to login in existing user
 *
 * Props:
 * -login: fn called in parent
 *
 * State:
 * -formData
 *
 * RouteList -> LoginForm
 */
function LoginForm({ login }) {
  const navigate = useNavigate()
  console.log("loginform");
  const [formData, setFormData] = useState({});
  console.log(formData, "formData for login");

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
    login(formData);
    navigate("/companies")
  }

  return (
    <form className="LoginForm" onSubmit={handleSubmit}>
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
        <button>log in</button>
      </span>
    </form>
  );
}

export default LoginForm;
