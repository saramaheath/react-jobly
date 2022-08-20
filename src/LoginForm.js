import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

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
  const navigate = useNavigate();
  console.log("loginform");
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errorState, setErrorState] = useState([]);

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
    try {
      await login(formData);
      navigate("/companies");
    } catch (err) {
      setErrorState(err);
    }
  }

  return (
    <div className="LoginForm">
      <form className="LoginForm-form" onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            name="username"
            placeholder="username"
            value={formData.username}
            autoComplete="on"
          ></input>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="password"
            value={formData.password}
            autoComplete="on"
          ></input>
          <button className="LoginForm-submit">Login</button>
      </form>
      {errorState.length > 0 && (
        <div>
          {errorState.map((error) => (
            <b>{error}</b>
          ))}
        </div>
      )}
    </div>
  );
}

export default LoginForm;
