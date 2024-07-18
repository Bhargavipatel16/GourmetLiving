import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <div className='f1'>
          <h1>GOURMET LIVING</h1>
          <br></br>
          <p>Consistently delivering the highest quality indulgent delights,
            in a fun and creative way. Bringing passion, creativity and social
            responsibility to the creation of a product that people love.</p>
          <br></br>
          <img src='https://gourmetliving.com.au/wp-content/uploads/2022/10/logo_hd.webp' />
        </div>


        <div className='f2'>
          <h1>QUICK LINKS</h1>
          <br></br>
          <Link to="/"><a href="/">HOME</a></Link><br></br>
          <Link to="Bestseller"><a href="/Bestseller">BEST SELLER</a></Link><br></br>
          <Link to="Hampers"><a href="/Hampers">HAMPERS</a></Link><br></br>
          <Link to="Products"><a href="/Products">PRODUCTS</a></Link><br></br>
          <Link to="Contactus"><a href="/contactus">CONTACT US</a></Link>
        </div>



        <div className='f3'>
          <h1>GET IN TOUCH</h1>
          <br></br>
          <FontAwesomeIcon icon={faPhone} className='fi' /> <a href='#'>0427 293 265</a><br></br><br></br>
          <FontAwesomeIcon icon={faEnvelope} className='fi' /> <a href="mailto:info@gourmetliving.com.au">info@gourmetliving.com.au</a>
          <br></br>
          <br></br>
          <div className='ffi'>
            <a href="https://www.facebook.com">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>


        <div className='f4'>
          <img src='https://gourmetliving.com.au/wp-content/uploads/2022/10/payment-removebg-preview.png' />
        </div>

      </div>
      <div className='fline'>
        <h2 class="elementor-heading-title elementor-size-default">© 2022 by Gourmet Living. All rights reserved.</h2>
      </div>
    </div>
  )
}

export default Footer
