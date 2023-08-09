import React from 'react'
import btngrey from '../../images/btngrey.png'
import bike from '../../images/bk 1.png'
import truck from '../../images/bk 2.png'
import logout from '../../images/logoutcircle.svg'
import './OrderPickUp.css'
import {RxHamburgerMenu} from 'react-icons/rx'
import SideBar from '../../components/SideBar/SideBar'
import { useState } from 'react'


const OrderPickUp = () => {

    const [showHamburger, setShowHamburger] = useState(true)

    const handleHamburgerClick = () => {
        setShowHamburger(!showHamburger);
      };



  return (
    <section>
        <div className="pickup">
            <aside>
          {showHamburger ?
                <div className="hamburger">
                    <RxHamburgerMenu size={30}  onClick={handleHamburgerClick}/>
                </div> :
              <SideBar/>}

                <SideBar/>
        
              
            </aside>
            <main>
                <header>
                    <span className="icon">
                       <img src= {logout} alt="icon" />
                    </span>
                    <button className='btn-text'>
                        Logout
                    </button>
                </header>
                <div className="heading">
                    New pickup
                </div>
                <form action="">
                <section className='pickup-details'>
                    <h3>Pickup Details</h3>   
                    <input type="text" name="" id=""  placeholder='Address' className='span'/>
                    <input type="tel" name="" id=""  placeholder='Phone Number' className='span'/>
                    
                </section>
                <section className='Dropoff-details'>
                    <h3>Dropoff Details</h3>
                    <div className="wrap">
                        <input type="text" name="" id=""  placeholder='Address'/>
                        <input type="tel" name="" id=""  placeholder='Recipient Number'/>
                    </div>
                    <input type="tel" name="" id=""  placeholder='Recipient number' className='span'/>
                </section>
            </form>
                <section className='Delivery-option'>
                    <h3>Delivery Option</h3>
                    <div className="option">
                        <span className="option__icon">
                            <img src={bike} alt="" />
                        </span>
                        <span className="option__button">
                            <img src={btngrey} alt="" />
                        </span>
                    </div>
                    <div className="option">
                    <span className="option__icon">
                            <img src={truck} alt="truck" />
                        </span>
                        <span className="option__button">
                            <img src={btngrey} alt="" />
                        </span>
                    </div>
                    
                </section>
                <section className='item-description'>
                    <h3>Item Description</h3>
                    <div className="items">
                    <div className="item">Food</div>
                        <div className="item">Documents</div>
                        <div className="item">Phones</div>
                        <div className="item">Clothes</div>
                        <div className="item">Other</div>
                    </div>
                            
                </section>
                <div className="wrap reduced">
                <section className='item-weight'>
                    <h3>Item weight</h3>
                    <input type="number" name="" id="" placeholder='0'/>       
                </section>

                <section className='no-item'>
                    <h3>No. of item</h3>
                    <input type="number" name="" id="" placeholder='0'/>       
                </section>
                </div>

                <section>
                    <form>
                        <div className="container">
                                <input type="number" name="" id="" placeholder='Enter voucher code' className='code' />
                                <div className="card">Voucher Card</div>
                        </div>
                        
                        <input type="button" value="Order pickup" className='form__button'/>
                    </form>
                </section>

                
            </main>
        </div>
    </section>
  )
}

export default OrderPickUp
