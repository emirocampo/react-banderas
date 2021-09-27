import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/search">Search</Link>
        </div>
    );
}

export default Header