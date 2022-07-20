import { NavLink } from 'react-router-dom';
import "./Navigation.css"

/**Navbar for whole site
 * 
 * App --> Navigation
 */
function Navigation(){
    console.log('Navigation');
    return (
        <nav className='navbar'>
            <NavLink className="NavJobly" to="/">Jobly</NavLink>
            <NavLink className="NavLink" to="/companies">Companies</NavLink>
            <NavLink className="NavLink" to="/jobs">Jobs</NavLink>
        </nav>
    )
}

export default Navigation;