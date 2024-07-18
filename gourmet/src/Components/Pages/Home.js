import React from 'react'
import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faLock, faTruck, } from '@fortawesome/free-solid-svg-icons';
import Data from '../Compo/Data'

const Home = () => {
  return (
    <div>
      {/* <Data/> */}
      <div>
        <div className="image-container">
          <img src='https://gourmetliving.com.au/wp-content/uploads/2022/10/slider.webp' />
          <div className="overlay">
            <h6>WITH ALL NEW </h6>
            <h6>HAMPERS COLLECTION</h6>
          </div>
        </div>

        <div className="grid">
          <div className="grid-container">
            <FontAwesomeIcon icon={faTruck} className='i4' />
            <div className="text">
              <h1>FREE DELIVERY</h1>
              <p>ON/ABOVE $100</p>
            </div>
          </div>

          <div className="grid-container">
            <FontAwesomeIcon icon={faAward} className='i4' />
            <div className="text">
              <h1>BEST SELLING</h1>
              <p>HAMPERS</p>
            </div>
          </div>

          <div className="grid-container">
            <FontAwesomeIcon icon={faLock} className='i4' />
            <div className="text">
              <h1>SECURED</h1>
              <p>SHOPPING SITE</p>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>

        <Data />

        <div className='line'>
          <h2 >
            We are on a mission to promote and support as many local Australian small businesses producing gourmet foods as we can.</h2>

        </div>

      </div>
    </div>
  )
}

export default Home
