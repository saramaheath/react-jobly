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
  useEffect(function fetchCompaniesWhenMounted() {
    async function fetchCompanies() {
      const response = await JoblyApi.getCompanies();
      setCompanyList({ data: response, isLoading: false });
    }
    fetchCompanies();
  }, []);

  console.log(companyList, "COMPANY LIST!!!!!!!!!!!!!!!!!!!!!!!");
  if (companyList.isLoading) return <i>Loading...</i>;

  return (
    <div>
      <p>Company List</p>
      <SearchForm />
      {companyList.data.map((company) => (
        <CompanyCard key={company.handle} company={company} />
      ))}
    </div>
  );
}

export default CompanyList;
