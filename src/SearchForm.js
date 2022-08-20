import React, { useState } from "react";
import "./SearchForm.css";
/**
 * Form for filtering jobs or companies
 *
 * Props:
 * -filter : fn to call parent function
 *
 * {CompanyList, JobList} -> SearchForm
 */
function SearchForm({ filter }) {
  const [formData, setFormData] = useState({});
  const [errorState, setErrorState] = useState([]);
  console.log("SearchForm");

  /** Update form input. */
  function handleChange(evt) {
    const input = evt.target;
    setFormData((formData) => ({
      ...formData,
      [input.name]: input.value,
    }));
  }

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    try {
      filter(formData);
    } catch (err) {
      setErrorState(err);
    }
  }

  return (
    <div className="SearchForm">
      <form className="SearchForm-form" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="params"
          placeholder="Enter search term.."
          autoComplete="on"
        ></input>
        <button className="SearchForm-submit">Submit</button>
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

export default SearchForm;
