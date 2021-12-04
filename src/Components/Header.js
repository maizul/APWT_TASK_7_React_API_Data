import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header>
                <nav className=""  >
                    <ul class="nav-bar">
                        <li><a href="/">Home</a></li>
                        <li><Link to="/packages">Packages</Link></li>
                        <li><Link to="/events">Events</Link></li>
                        <li><a href="">Resort</a></li>
                        <li><a href="">ShopHobe</a></li>
                        <li><a href="">RentHobe</a></li>
                        <li><a href="/contactus">Contact Us</a></li>
                    </ul>
                </nav>
                    <li><a class="btn" href=""><span ></span>Sign in</a></li>
                
                
            </header>
        </div>
    );
};

export default Header;