import { JoblyApi } from "./api";
import JobCardList from "./JobCardList";
import SearchForm from "./SearchForm";
import React, { useEffect, useState } from "react";

/**Shows list of all jobs and search form
 *
 * Routes --> JobList --> {SearchForm, JobCardList}
 */
function JobList() {
  console.log("joblist");
  const [jobList, setJobList] = useState({
    data: null,
    isLoading: true,
  });
  const [params, setParams] = useState({});
  console.log("joblist at start", jobList);

  function filter(formData) {
    console.log("filter", formData);
    const params = { title: formData.params };
    console.log("params=", params);
    setParams(params);
    console.log("filter jobList", jobList);
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

  console.log(jobList, "JOB LIST!!!!!!!!!!!!!!!!!!!!!!!");
  if (jobList.isLoading) return <i>Loading...</i>;

  return (
    <div>
      <p>Job List</p>
      <SearchForm filter={filter} />
      <JobCardList jobs={jobList.data}/>
    </div>
  );
}

export default JobList;
