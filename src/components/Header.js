import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Search from './Search';

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
          FIGURZ
        </Link>
        <Navbar />
        <Search />
      </div>
    </header>
  );
};

export default Header;
