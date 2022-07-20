import JobCardList from "./JobCardList";

/**Shows details and jobs of one single company
 *
 * Routes --> CompanyDetail --> JobCardList
 */
function CompanyDetail() {
  console.log("company detail");
  return (
    <div>
      <p>Company Detail</p>
      <JobCardList />
    </div>
  );
}

export default CompanyDetail;
