
/**Shows information for a single job
 * 
 * Props:
 * -job = {id, title, salary, equity, companyHandle, companyName}
 */
function JobCard({job}) {
    console.log("JobCard", job)
    return (
        <div className="JobCard">
            <p>{job.title}</p>
            <p>{job.companyName}</p>
            <p>{job.salary}</p>
            <p>{job.equity}</p>
        </div>
    )
}

export default JobCard;