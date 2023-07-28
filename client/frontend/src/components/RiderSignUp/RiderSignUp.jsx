import React from 'react'
import './RiderSignUp.css'
import Facebook from "../../images/facebook.png";
import Google from "../../images/google.png";

const RiderSignUp = () => {
  return (
    <section className='wrapper'>
        <div className="heading">
            <h1 className='heading__title'>Register</h1>
            <span className='heading__content'>
            Welcome, Please enter your details
            </span>
        </div>
        <div className="social">
            <span className="social__text">
            Continue with
            </span>
  
                <a href="/" className='social__icon'  >
                    <img src={Google} alt="google icon" />
                </a>
                <a href="/" className='social__icon' >
                    <img src={Facebook} alt="facebook logo" />
                </a>
           
        </div>

        <form>

            <div className="form__wrapper">
                <div className="wrap">
                <input type="text" placeholder='First Name'/>
                <input type="text" placeholder='Last Name'/>
                </div>
                <input type='email' placeholder='Email'/>
                <div className="wrap">
                    <input type="text" placeholder='Address' />
                    <input type="text" placeholder='City' />
                </div>
                
                <input type="tel" placeholder='Phone Number' className='form__span'/>
                <input type="password" placeholder="Passowrd" className='form__span' required />
                <input type="password" placeholder="Confirm Password" className='form__span' required />
            </div>
 
        </form>


    </section>
  )
}

export default RiderSignUp
