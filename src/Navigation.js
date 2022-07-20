import { Link } from 'react-router-dom';

/**Navbar for whole site
 * 
 * App --> Navigation
 */
function Navigation(){
    console.log('Navigation');
    return (
        <nav className='navbar'>
            <Link to="/">Home</Link>
            <Link to="/companies">Companies</Link>
            <Link to="/jobs">Jobs</Link>
        </nav>
    )
}

export default Navigation;