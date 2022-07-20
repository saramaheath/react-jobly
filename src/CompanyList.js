import SearchForm from "./SearchForm";
import CompanyCard from "./CompanyCard";
import { JoblyApi } from "./api";
import React, { useEffect, useState } from "react";

/**Shows list of all companies and search form
 *
 * Routes --> CompanyList --> { SearchForm, CompanyCard }
 */
function CompanyList() {
  console.log("companylist");
  const [companyList, setCompanyList] = useState({
    data: null,
    params: {},
    isLoading: true,
  });
  console.log("companyList at start", companyList)

  // useEffect(function fetchCompaniesWhenMounted() {
  //   async function fetchCompanies() {
  //     const response = await JoblyApi.getCompanies();
  //     setCompanyList({ data: response, isLoading: false });
  //   }
  //   fetchCompanies();
  // }, []);

  function filter(formData) {
    console.log("filter", formData)
    let newfield = "params"
    const params = { name: formData };
    console.log("params=", params)
    setCompanyList( curr => ({...curr, [newfield]: params}))
    console.log("filter compList", companyList)
  }

  useEffect(
    function fetchCompaniesOnChange() {
      async function fetchFilteredCompanies() {
        const response = await JoblyApi.getFilteredCompanies(companyList.params);
        setCompanyList({ data: response, params: {} ,isLoading: false });
      }
      fetchFilteredCompanies();
    },
    []
  );

  console.log(companyList, "COMPANY LIST!!!!!!!!!!!!!!!!!!!!!!!");
  if (companyList.isLoading) return <i>Loading...</i>;

  return (
    <div>
      <p>Company List</p>
      <SearchForm filter={filter} />
      {companyList.data.map((company) => (
        <CompanyCard key={company.handle} company={company} />
      ))}
    </div>
  );
}

export default CompanyList;
