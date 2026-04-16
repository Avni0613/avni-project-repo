import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to="/Home">Home</Link>
            <Link to="/About">About us </Link>
        </nav>
    );
};
export default Navbar;


