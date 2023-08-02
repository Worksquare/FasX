import React from 'react'
<<<<<<< HEAD

import './PopUp2.css'

const PopUp2 = () => {

  return (
  
    <div className="popup-container">  
          <div className='popup2'>
=======
import { useState } from 'react'
import './PopUp2.css'

const PopUp2 = () => {
    const [showPopup, setShowPopup] = useState(false);
    const PopupCard = () => {
        setShowPopup (!showPopup);
    }

  return (
    <div>  
        {/* this button is only to show the pop up card */}
        <button className='btn-green' onClick={PopupCard}>show card</button>

        {showPopup && (
    <div className="popup-container">  
          <div className='popup'>
>>>>>>> 0713867 (created a branch)
            <h3>
            Payment Info
            </h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="2" viewBox="0 0 920 1" fill="none">
                <path d="M0 0.640625L919.911 0.640708" stroke="#D7D7D7" stroke-width="1.25671"/>
            </svg>

              <div className="content">
 
              <div className='pop-flex'>
<<<<<<< HEAD
                  <span className="list-name2">
                  Delivery Fee
                  </span>
                  <span className="list-price2">
=======
                  <span className="list-name">
                  Delivery Fee
                  </span>
                  <span className="list-price">
>>>>>>> 0713867 (created a branch)
                  #490.00
                  </span>
              </div>

              
              <div className='pop-flex'>
<<<<<<< HEAD
                  <span className="list-name2">
                  Service Fee
                  </span>
                  <span className="list-price2">
=======
                  <span className="list-name">
                  Service Fee
                  </span>
                  <span className="list-price">
>>>>>>> 0713867 (created a branch)
                  #50.00
                  </span>
              </div>

              <div className='pop-flex'>
<<<<<<< HEAD
                  <span className="list-name2">
                  Voucher
                  </span>
                  <span className="list-price2">
=======
                  <span className="list-name">
                  Voucher
                  </span>
                  <span className="list-price">
>>>>>>> 0713867 (created a branch)
                  -#20.00
                  </span>
            </div>

              <div className='pop-flex'>
<<<<<<< HEAD
                  <span className="total-name2">
                      Total
                  </span>
                  <span className="total-price2">
=======
                  <span className="total-name">
                      Total
                  </span>
                  <span className="total-price">
>>>>>>> 0713867 (created a branch)
                      #520.00
                  </span>
              </div>

            </div> 

<<<<<<< HEAD
             <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="2" viewBox="0 0 920 2" fill="none">
                <path d="M0 0.640625L919.911 0.640708" stroke="#D7D7D7" stroke-width="1.25671"/>
            </svg> 
  
=======
             <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="2" viewBox="0 0 920 1" fill="none">
                <path d="M0 0.640625L919.911 0.640708" stroke="#D7D7D7" stroke-width="1.25671"/>
            </svg> 

>>>>>>> 0713867 (created a branch)
            <div className="payment-type">
               <div className="row">
                  <input type="checkbox" />
                  <span>
                    wallet
                  </span>
               </div>
               <div className="row">
                  <input type="checkbox" />
                  <span>
                    Pay On Delivery
                  </span>
               </div>
              
               <div className="row">
                  <input type="checkbox" />
                  <span>
                  Pay With Card, Bank Transfer or Ussd
                  </span>
               </div>
               <ul>
                 <li>Payment with card will warrant rider to bring POS</li>
                 <li>Rider will confirm transfer before releasing item</li>
               </ul>
              
<<<<<<< HEAD
               <div className="btn-green"> 
                    Confirm 
              </div>     
              
            </div>
             


          </div>
        </div>
      
=======
              
            </div>
              {/* <div className="btn-green">
                  <a href="http://">
                    Confirm
                  </a> 
              </div>      */}
          </div>

          
        </div>
         )}
    </div>
>>>>>>> 0713867 (created a branch)
  )
}

export default PopUp2
