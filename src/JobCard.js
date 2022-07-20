
/**Shows information for a single job
 * 
 * Props:
 * -job = {id, title, salary, equity, companyHandle, companyName}
 */
function JobCard({job}) {
    console.log("JobCard", job)
    return (
        <div className="JobCard">
            <p>Job Title</p>
            <p>Company Name</p>
            <p>Salaray</p>
            <p>equity</p>
        </div>
    )
}

export default JobCard;