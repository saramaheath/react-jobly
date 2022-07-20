

/**Shows information for a single company
 * 
 * Props:
 * -company: {handle, name, description, numEmployees, logoURL}
 */
function CompanyCard({company}) {
    console.log("CompanyCard", company)
    return (
        <div className="CompanyCard">
            <p>{company.name}</p>
            <p>{company.description}</p>
        </div>
    )
}

export default CompanyCard;