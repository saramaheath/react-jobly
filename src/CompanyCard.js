import { Link } from "react-router-dom";
import "./CompanyCard.css";

/**Shows information for a single company
 *
 * Props:
 * -company: {handle, name, description, numEmployees, logoURL}
 *
 * State:
 * -None
 */
function CompanyCard({ company }) {
  return (
    <Link to={`/companies/${company.handle}`}>
      <div className="CompanyCard">
        {company.logoUrl !== null && (
          <div className="CompanyCard-inner">
            <img className="CompanyCard-image" src={company.logoUrl} alt={`${company.handle} Logo`}></img>
            <h3>{company.name}</h3>
            <p>{company.description}</p>
          </div>
        )}
        {company.logoUrl === null && (
          <div className="CompanyCard-inner">
            <h3>{company.name}</h3>
            <p>{company.description}</p>
          </div>
        )}
      </div>
    </Link>
  );
}

export default CompanyCard;
