
/**
 * Form for filtering jobs or companies
 * 
 * Props:
 * -filterFunction* : fn to call parent function
 *
 * {CompanyList, JobList} -> SearchForm
 */
function SearchForm({filterFunction}) {
    console.log("SearchForm", filterFunction)

    return(
        <form className="SearchForm">
            <input name="search" placeholder="Enter search term.."></input>
            <button>Submit</button>
        </form>
    )
}

export default SearchForm;