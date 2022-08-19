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
  const [formData, setFormData] = useState({username: '', password: ''});

  /** Update form input. */
  function handleChange(evt) {
    const input = evt.target;
    setFormData((formData) => ({
      ...formData,
      [input.name]: input.value,
    }));
  }
 //TODO: add try/catch for error handling and messages
  /** Call parent function. */
  async function handleSubmit(evt) {
    evt.preventDefault();
    await login(formData);
    navigate("/companies")
  }

  return (
    <form className="LoginForm" onSubmit={handleSubmit}>
      <span>
        <input
          onChange={handleChange}
          name="username"
          placeholder="username"
          value={formData.username}
        ></input>
        <input
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="password"
          value={formData.password}
        ></input>
        <button>log in</button>
      </span>
    </form>
  );
}

export default LoginForm;
