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
      <h3>{job.title}</h3>
      <p className="JobCard-companyname">{job.companyName}</p>
      <p><b>Salary:</b> {job.salary}</p>
      <p><b>Equity:</b> {job.equity}</p>
    </div>
  );
}

export default JobCard;
