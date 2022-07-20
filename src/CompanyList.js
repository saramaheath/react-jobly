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

  function filter(formData) {
    const params = { params: { name: formData } };
    useEffect(
      function fetchCompaniesOnChange() {
        async function fetchFilteredCompanies() {
          const response = await JoblyApi.getFilteredCompanies(params);
          setCompanyList({ data: response, isLoading: false });
        }
        fetchFilteredCompanies();
      },
      [formData]
    );
  }

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
