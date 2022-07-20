import React, { useState } from "react"
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
            <input onChange={handleChange} name="params" placeholder="Enter search term.."></input>
            <button>Submit</button>
        </form>
    )
}

export default SearchForm;