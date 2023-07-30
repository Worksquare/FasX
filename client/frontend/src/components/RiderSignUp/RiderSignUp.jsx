import React from 'react'
import './RiderSignUp.css'
import Facebook from "../../images/facebook.png";
import Google from "../../images/google.png";

const RiderSignUp = () => {
  return (
    <section>
        <div className="signup-nav">
            <div className="signup-nav__logo">
                    <span className='signup-nav__logo--main'>
                    Fast
                        <span className="gradient"> X </span>
                    </span>
                    <span className='signup-nav__logo--text'>
                    Choose Fast. Track Faster. Deliver on time.
                    </span>
            </div>
            <div className="signup-nav__btn">
                <button>
                    Log in
                </button>
            </div>
        </div>
    <div className='wrapper'>
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
                    <img src={Google} alt="google logo" />
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
                <input type="password" placeholder="Password" className='form__span' required />
                <input type="password" placeholder="Confirm Password" className='form__span' required />
                <input type="button" value="CONTINUE" className='form__button' />
            </div>
        </form>


    </div>

    </section>
  )
}

export default RiderSignUp
