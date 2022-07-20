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
    isLoading: true,
  });
  const [params, setParams] = useState({});
  console.log("companyList at start", companyList);

  function filter(formData) {
    console.log("filter", formData);
    const params = { name: formData.params };
    console.log("params=", params);
    setParams(params);
    console.log("filter compList", companyList);
  }

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
