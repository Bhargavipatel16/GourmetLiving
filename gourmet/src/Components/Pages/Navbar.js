import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Nav.css'


const Navbar = () => {
    return (
        <div>
            <div className='nav'>
                <div className='nline'>
                    <FontAwesomeIcon icon={faPhone} className='i' /><a href='#'>0427 293 265</a>
                    <FontAwesomeIcon icon={faEnvelope} className='i' /> <a href="mailto:info@gourmetliving.com.au">info@gourmetliving.com.au</a>
                    <h3>SUPPORTING LOCAL AUSTRALIAN PRODUCERS</h3>
                </div>
                <img src='https://gourmetliving.com.au/wp-content/uploads/2022/10/logo-web-1.webp' style={{ marginLeft: '600px', height: '150px', width: '350px' }} />
                <br></br>
                <div className="nav-links">
                    <Link to="/"><a href="/">HOME</a></Link>
                    <Link to="Bestseller"><a href="/Bestseller">BEST SELLER</a></Link>
                    <Link to="Hampers"><a href="/Hampers">HAMPERS</a></Link>
                    <Link to="Products"><a href="/Products">PRODUCTS</a></Link>
                    <Link to="Contactus"><a href="/contactus">CONTACT US</a></Link>
                    <Link to="Addtocart"><FontAwesomeIcon icon={faCartShopping} className='i2' /></Link>
                    <a href='#'> <FontAwesomeIcon icon={faMagnifyingGlass} className='i3' /></a>
                </div>
            </div>

        </div>
    )
}

export default Navbar
