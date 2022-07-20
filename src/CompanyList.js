import SearchForm from "./SearchForm";
import CompanyCard from "./CompanyCard";

/**Shows list of all companies and search form
 *
 * Routes --> CompanyList --> { SearchForm, CompanyCard }
 */
function CompanyList() {
  console.log("companylist");
  return (
    <div>
      <p>Company List</p>
      <SearchForm />
      <CompanyCard />
    </div>
  );
}

export default CompanyList;
