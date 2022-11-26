import Navbar from './Navbar';
import { Link, NavLink } from 'react-router-dom';
import Swipe from './Swipe';
import { BsCart } from 'react-icons/bs';
import { useCartContext } from "../Cart/cart-context"

const Header = () => {
  const {total_item} = useCartContext();

  return (
    <header>
      <div className="nav-area">
        <div className='top'>
          <Link to="/" className="logo">FIGURZ</Link>
          <div className='cart-btn'>
            <NavLink to='/Cart' className='cart-link'>
              <div style={{display: 'flex'}}>
                <BsCart className='cart-icon'/>
                <span className={total_item < 1 ? 'none' : 'total'}>{total_item}</span>
              </div>
            </NavLink> 
          </div>
          {/* <div className='search-bar'>
            <BsSearch className='search-icon'/>
            <input type='text' placeholder='Search...'></input>
          </div> */}
        </div>
        <Swipe className='mid'/>
        <Navbar className='bottom'/>
      </div>
    </header>
  );
};

export default Header;
