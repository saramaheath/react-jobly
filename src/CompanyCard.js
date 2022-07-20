

/**Shows information for a single company
 * 
 * Props:
 * -company: {handle, name, description, numEmployees, logoURL}
 */
function CompanyCard({company}) {
    console.log("CompanyCard", company)
    return (
        <div className="CompanyCard">
            <p>Company Name</p>
            <p>Company description</p>
        </div>
    )
}

export default CompanyCard;