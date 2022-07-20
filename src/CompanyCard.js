import { Link } from 'react-router-dom';

/**Shows information for a single company
 *
 * Props:
 * -company: {handle, name, description, numEmployees, logoURL}
 */
function CompanyCard({ company }) {
  
  return (
    <Link to={`/companies/${company.handle}`}>
      <div className="CompanyCard">
        <p>{company.name}</p>
        <p>{company.description}</p>
      </div>
    </Link>
  );
}

export default CompanyCard;
