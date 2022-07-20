import JobCard from "./JobCard";

/**
 * Show a detailed list of jobs
 *
 * Props:
 * -jobs = [{id, title, salary, equity, companyHandle, companyName}, ...]
 *
 * {CompanyDetail, Joblist} -> JobCardList -> JobCard
 *  */

function JobCardList({ jobs }) {
  console.log("JobCardList", jobs);
  return (
    <div>
      <JobCard />
    </div>
  );
}

export default JobCardList;
