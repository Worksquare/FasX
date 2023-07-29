import React from 'react'
import Facebook from "../../images/facebook.png";
import Google from "../../images/google.png";


const RiderSignUp2 = () => {
  return (
    <section>
        <div className='wrapper'>
        <div className="heading">
            <h1 className='heading__title'>Continue</h1>
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
                <input type="text" placeholder='Type Vehicle'/>
                <input type="text" placeholder='Color'/>
                </div>
                <input type='text' placeholder='Model'/>
                <div className="wrap">
                    <input type="text" placeholder='Chasis Number' />
                    <input type="number" placeholder='Plate Number' />
                </div>
                
                <input type="date" placeholder='Owned since'/>
                <input type="image" src="" alt="" />
                <input type="button" value="CONTINUE" className='form__button' />
            </div>
        </form>
</div>
    </section>
  )
}

export default RiderSignUp2
