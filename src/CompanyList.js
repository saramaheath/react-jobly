import SearchForm from "./SearchForm";
import CompanyCard from "./CompanyCard";
import { JoblyApi } from "./api";
import React, { useEffect, useState } from "react";

/**Shows list of all companies and search form
 * 
 * Props:
 * -None
 * 
 * State:
 * -companyList
 * -params
 *
 * Routes --> CompanyList --> { SearchForm, CompanyCard }
 */
function CompanyList() {
  console.log("companylist");
  const [companyList, setCompanyList] = useState({
    data: null,
    isLoading: true,
  });
  const [params, setParams] = useState({});

  useEffect(
    function fetchCompaniesOnChange() {
      async function fetchFilteredCompanies() {
        const response = await JoblyApi.getFilteredCompanies(params);
        setCompanyList({ data: response, isLoading: false });
      }
      fetchFilteredCompanies();
    },
    [params]
  );

  function filter(formData) {
    const params = { name: formData.params };

    setParams(params);
  }
  
  if (companyList.isLoading) return <i>Loading...</i>;

  return (
    <div className="CompanyList">
      <SearchForm filter={filter} />
      {companyList.data.map((company) => (
        <CompanyCard key={company.handle} company={company} />
      ))}
    </div>
  );
}

export default CompanyList;
