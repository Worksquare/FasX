import React from 'react'
import './PopUp1.css'

const PopUp1 = () => {
  return (
    

    <div className="popup-container show">  
          <div className='popup'>
            <h3>
                Fare
            </h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="500" height="2" viewBox="0 0 920 2" fill="none">
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
                  Delivery Fee
                  </span>
                  <span className="list-price">
                  #490.00
                  </span>
              </div>

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
                  <span className="list-name">
                      Total
                  </span>
                  <span className="list-price">
                      #520.00
                  </span>
              </div>

            </div>       
          </div>
        </div>
     

  )
}

export default PopUp1
