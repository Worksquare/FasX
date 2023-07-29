import React from 'react'
import './RiderSignUp2.css'
import icon from '../../images/Icon.png'



const RiderSignUp2 = () => {
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
        </div>

        <div className='wrapper'>
        <div className="heading">
            <h1 className='heading__title'>Continue</h1>
            <span className='heading__content'>
            Welcome, Please enter your details
            </span>
        </div>
        

        <form>

            <div className="form__wrapper">
                <div className="wrap">
                    <input type="text" placeholder='Type Vehicle'/>
                    <input type="text" placeholder='Color'/>
                </div>
                <input type='text' placeholder='Model'/>
                <div className="wrap">
                    <input type="number" placeholder='Chasis Number' />
                    <input type="number" placeholder='Plate Number' />
                </div>
                
                <input type="date" placeholder='Owned since' className='form__span'/>

                <div className="file-upload">
                    <input type="file" id="file-input" accept=".pdf, .doc, .docx"/>
                    <div className="upload-icon">
                        <img src={icon} alt="Upload Icon"/>
                    </div>
                </div>

                <input type="button" value="CONTINUE" className='form__button form__span' />
            </div>
        </form>
</div>
    </section>
  )
}

export default RiderSignUp2
