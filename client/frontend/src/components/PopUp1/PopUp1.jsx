import React from 'react'
import { useState } from 'react'
import PopUp2 from './PopUp2/PopUp2';

import './PopUp1.css'

const PopUp1 = () => {

        const [showPopup, setShowPopup] = useState(false);
        const [showPopup2, setShowPopup2] = useState(false);


        const PopupCard = () => {
            setShowPopup (true);
        }

        const OpenPopUp2 = () => {
          setShowPopup2(true);
          setShowPopup (false);
        };


      
  return (
    <div>  
        {/* this button is only to show the pop up card */}
        <button className='btn-green' onClick={PopupCard}>show card</button>

        {showPopup && (
    <div className="popup-container">  
          <div className='popup'>
            <h3>
                Fare
            </h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="2" viewBox="0 0 920 1" fill="none">
                <path d="M0 0.640625L919.911 0.640708" stroke="#D7D7D7" stroke-width="1.25671"/>
            </svg>

              <div className="content">
 
              <div className='pop-flex'>
                  <span className="list-name">
                  Delivery Fee
                  </span>
                  <span className="list-price">
                  #490.00
                  </span>
              </div>

              
              <div className='pop-flex'>
                  <span className="list-name">
                  Service Fee
                  </span>
                  <span className="list-price">
                  #50.00
                  </span>
              </div>

              <div className='pop-flex'>
                  <span className="list-name">
                  Voucher
                  </span>
                  <span className="list-price">
                  -#20.00
                  </span>
            </div>

              <div className='pop-flex'>
                  <span className="total-name">
                      Total
                  </span>
                  <span className="total-price">
                      #520.00
                  </span>
              </div>

              <div className="btn-green" onClick={OpenPopUp2}>
                    Proceed
              </div>

            </div>       
          </div>
        </div>
         )}

        {showPopup2 && <PopUp2 />}
      </div>

  );
};

export default PopUp1
