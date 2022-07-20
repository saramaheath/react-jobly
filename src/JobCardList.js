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
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default JobCardList;
