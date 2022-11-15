import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Swipe from './Swipe';
import { BsSearch } from 'react-icons/bs';

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <div className='top'>
          <Link to="/" className="logo">FIGURZ</Link>
          <div className='search-bar'>
            <BsSearch className='search-icon'/>
            <input type='text' placeholder='Search...'></input>
          </div>
        </div>
        <Swipe className='mid'/>
        <Navbar className='bottom'/>
      </div>
    </header>
  );
};

export default Header;
