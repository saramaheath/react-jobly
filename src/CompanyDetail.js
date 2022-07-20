import { useParams } from "react-router-dom";
import JobCardList from "./JobCardList";
import React, { useState, useEffect } from "react";
import { JoblyApi } from "./api";

/**Shows details and jobs of one single company
 *
 * Routes --> CompanyDetail --> JobCardList
 */
function CompanyDetail() {
  console.log('CompanyDetail');
  const [companyDetail, setCompanyDetail] = useState({
    data: null,
    isLoading: true,
  });
  const params = useParams();

  useEffect(function fetchCompanyDetailWhenMounted() {
    async function fetchCompanyDetail() {
      const response = await JoblyApi.getCompany(params.handle);
      setCompanyDetail({ data: response, isLoading: false });
    }
    fetchCompanyDetail();
  }, []);

  if (companyDetail.isLoading) return <i>Loading...</i>;

  return (
    <div>
      <h2>{companyDetail.data.name}</h2>
      <h3>{companyDetail.data.description}</h3>
      <JobCardList jobs={companyDetail.data.jobs}/>
    </div>
  );
}

export default CompanyDetail;
