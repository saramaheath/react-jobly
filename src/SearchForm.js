import React, { useState } from "react"
import './SearchForm.css'
/**
 * Form for filtering jobs or companies
 * 
 * Props:
 * -filter : fn to call parent function
 *
 * {CompanyList, JobList} -> SearchForm
 */
function SearchForm({filter}) {
    const [formData, setFormData] = useState({});
    console.log("SearchForm")

    /** Update form input. */
  function handleChange(evt) {
    const input = evt.target;
    setFormData(formData => ({
      ...formData,
      [input.name]: input.value,
    }));
  }

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    filter(formData);
  }

    return(
        <form className="SearchForm" onSubmit={handleSubmit}>
          <span>
            <input onChange={handleChange} name="params" placeholder="Enter search term.."></input>
            <button className="SignupForm-submit">Submit</button>
            </span>
        </form>
    )
}

export default SearchForm;