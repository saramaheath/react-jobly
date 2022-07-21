import React, { useState } from "react"
/**form to login in existing user
 * 
 * Props:
 * -login: fn called in parent
 * 
 * State:
 * -formData
 */
function LoginForm ({login}) {
    const [formData, setFormData] = useState({})

    /** Update form input. */
  function handleChange(evt) {
    const input = evt.target;
    setFormData(formData => ({
      ...formData,
      [input.name]: input.value,
    }));
  }

  /** Call parent function. */
  function handleSubmit(evt) {
    evt.preventDefault();
    login(formData);
  }

    return(
        <form className="SearchForm" onSubmit={handleSubmit}>
          <span>
            <input onChange={handleChange} name="userName" placeholder="username"></input>
            <input onChange={handleChange} name="password" placeholder="password"></input>
            <button>log in</button>
            </span>
        </form>
    )
}


export default LoginForm;