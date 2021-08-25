import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
const Header = () => {
    const [{ basket }] = useStateValue();

    console.log(basket);
    return (
        <>
        <nav className="header">
            <Link to="/">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="header-logo" />
            </Link>
            <div className="header__search">
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to="/login" className="header__link">
                    <div className="header__option">
                    <span className="header__option--line1">Hello</span>
                    <span className="header__option--line2">sign in</span>
                    </div>
                </Link>
                <Link to="/returns and orders" className="header__link">
                    <div className="header__option">
                    <span className="header__option--line1">Returns</span>
                    <span className="header__option--line2">& Orders</span>
                    </div>
                </Link>
                <Link to="/your prime" className="header__link">
                    <div className="header__option">
                    <span className="header__option--line1">Your</span>
                    <span className="header__option--line2">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header__link">
                    <div className="header__basket">
                        <ShoppingBasketIcon />
                        <span className="header__option--line2 header__basket--count">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
        </>
    )
}

export default Header
