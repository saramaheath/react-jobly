import { JoblyApi } from "./api";
import JobCardList from "./JobCardList";
import SearchForm from "./SearchForm";

/**Shows list of all jobs and search form
 *
 * Routes --> JobList --> {SearchForm, JobCardList}
 */
function JobList() {
  console.log("joblist");
  return (
    <div>
  <p>Job List</p>
  <SearchForm />
  <JobCardList />
  </div>);
}

export default JobList;
