import "./JobCard.css";
/**Shows information for a single job
 *
 * Props:
 * -job = {id, title, salary, equity, companyHandle, companyName}
 * 
 * State:
 * -None
 */
function JobCard({ job }) {
  console.log("JobCard", job);
  return (
    <div className="JobCard">
      <p>{job.title}</p>
      <p>{job.companyName}</p>
      <p>Salary: {job.salary}</p>
      <p>Equity: {job.equity}</p>
    </div>
  );
}

export default JobCard;
