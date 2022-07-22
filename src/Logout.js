import { useNavigate } from "react-router-dom"

/**used to log users out
 * 
 * Context: 
 * -{user}: like {username, firstName, lastName, email}
 * 
 * Props:
 * -logout: fn called by parent
 * 
 */
function Logout ({logout}) {
    const navigate = useNavigate()
    console.log("logout")
    logout();
    navigate("/")
    
}

export default Logout