import React from 'react'
import './PopUp2.css'

const PopUp2 = () => {

  return (
  
    <div className="popup-container">  
          <div className='popup2'>
            <h3>
            Payment Info
            </h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="2" viewBox="0 0 920 1" fill="none">
                <path d="M0 0.640625L919.911 0.640708" stroke="#D7D7D7" stroke-width="1.25671"/>
            </svg>

              <div className="content">
 
              <div className='pop-flex'>
                  <span className="list-name2">
                  Delivery Fee
                  </span>
                  <span className="list-price2">
                  #490.00
                  </span>
              </div>

              
              <div className='pop-flex'>
                  <span className="list-name2">
                  Service Fee
                  </span>
                  <span className="list-price2">
                  #50.00
                  </span>
              </div>

              <div className='pop-flex'>
                  <span className="list-name2">
                  Voucher
                  </span>
                  <span className="list-price2">
                  -#20.00
                  </span>
            </div>

              <div className='pop-flex'>
                  <span className="total-name2">
                      Total
                  </span>
                  <span className="total-price2">
                      #520.00
                  </span>
              </div>

            </div> 

             <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="2" viewBox="0 0 920 2" fill="none">
                <path d="M0 0.640625L919.911 0.640708" stroke="#D7D7D7" stroke-width="1.25671"/>
            </svg> 
  
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
               <div className="btn-green"> 
                    Confirm 
              </div>     
              
            </div>
             


          </div>
        </div>

  )
}

export default PopUp2
