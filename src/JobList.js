import { JoblyApi } from "./api";
import JobCardList from "./JobCardList";
import SearchForm from "./SearchForm";
import React, { useEffect, useState } from "react";

/**Shows list of all jobs and search form
 *
 * Routes --> JobList --> {SearchForm, JobCardList}
 */
function JobList() {
  console.log("JobList");
  const [jobList, setJobList] = useState({
    data: null,
    isLoading: true,
  });
  const [params, setParams] = useState({});

  function filter(formData) {
    const params = { title: formData.params };
    setParams(params);
  }

  useEffect(
    function fetchJobsOnChange() {
      async function fetchFilteredJobs() {
        const response = await JoblyApi.getFilteredJobs(params);
        setJobList({ data: response, isLoading: false });
      }
      fetchFilteredJobs();
    },
    [params]
  );

  if (jobList.isLoading) return <i>Loading...</i>;

  return (
    <div>
      <SearchForm filter={filter} />
      <JobCardList jobs={jobList.data} />
    </div>
  );
}

export default JobList;
