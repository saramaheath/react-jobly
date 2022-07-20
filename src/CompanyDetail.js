import { useParams } from "react-router-dom";
import JobCardList from "./JobCardList";
import React, { useState, useEffect } from "react";
import { JoblyApi } from "./api";

/**Shows details and jobs of one single company
 *
 * Routes --> CompanyDetail --> JobCardList
 */
function CompanyDetail() {
  console.log("company detail");
  const [companyDetail, setCompanyDetail] = useState({
    data: null,
    isLoading: true,
  });
  const params = useParams();
  console.log(params, "PARAMS*****************************");
  useEffect(function fetchCompanyDetailWhenMounted() {
    async function fetchCompanyDetail() {
      const response = await JoblyApi.getCompany(params.handle);
      setCompanyDetail({ data: response, isLoading: false });
    }
    fetchCompanyDetail();
  }, []);

  console.log(companyDetail, "COMPANY DETAIL!!!!!!!!!!!!!!!!!!!!!!!");
  if (companyDetail.isLoading) return <i>Loading...</i>;

  return (
    <div>
      <p>Company Detail</p>
      <JobCardList jobs={companyDetail.data.jobs}/>
    </div>
  );
}

export default CompanyDetail;
