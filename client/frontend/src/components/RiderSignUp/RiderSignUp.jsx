import React from 'react'
import './RiderSignUp.css'
import Facebook from "../../images/facebook.png";
import Google from "../../images/google.png";
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

// import RiderSignUp2 from '../RiderSignUp2/RiderSignUp2'

const RiderSignUp = () => {

    // const [showRiderSignUp2, setShowRiderSignUp2] = useState(false);
    
    const navigate = useNavigate();
    const handleContinue = () => {
      navigate('/RiderSignUp2',{state: { riderData: riderData }});
      
    };
     
    const [riderData, setRiderData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
      });

  const handleSubmit = async (e) => {
    e.preventDefault();
        await fetch('https://fastx-logistic-api.onrender.com/v1/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(riderData),
        });
  
       
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRiderData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

    // await signup(firstName, surName, phoneNumber, address, city,  email, password)
  return (

    <section className='signup'>
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

        <form onSubmit={handleSubmit}>

            <div className="form__wrapper">
                <div className="wrap">
                <input type="text" placeholder='First Name'
                 onChange={handleChange}
                 name='firstName'
                 value={riderData.firstName}
                 />
                <input type="text" placeholder='Last Name'
                 onChange={handleChange}
                 name='lastName'
                 value={riderData.lastName}
                />
                </div>
                <input type='email' placeholder='Email'
                  onChange={handleChange}
                  name='email'
                  value={riderData.email}    
                />
                <div className="wrap">
                    <input type="text" placeholder='Address' 
                        onChange={handleChange}
                        name='address'
                        value={riderData.address}
                    />
                    <input type="text" placeholder='City'
                        onChange={handleChange}
                        name='city'
                        value={riderData.city}/>
                </div>
                
                <input type="tel" placeholder='Phone Number' className='form__span'
                    onChange={handleChange}
                    name='phoneNumber'
                    value={riderData.phoneNumber}
                />
                <input type="password" placeholder="Password" className='form__span' required
                  onChange={handleChange}
                  name='password'
                  value={riderData.password}  
    
                />
                <input type="password" placeholder="Confirm Password" className='form__span' required
                    onChange={handleChange}
                    name='confirmPassword'
                    value={riderData.confirmPassword}
                />
                <input type="button" value="CONTINUE" className='form__button' onClick={handleContinue} />
            </div>
        </form>


    </div>



    </section>

      // <RiderSignUp2 riderData={riderData} />
    
  )
};

export default RiderSignUp



// "user": {
//     "firstName": "isaiah",
//     "surName": "mensah",
//     "address": "739b Babatunde Atere, Omole Phase 2.",
//     "city": "Lagos",
//     "phoneNumber": "08145080202",
//     "role": "user",
//     "mediaIds": [],
//     "isEmailVerified": false,
//     "email": "iammensaiah@gmail.com",
//     "id": "64cb6e6649eb96e650145dd4"
// },
// "tokens": {
//     "access": {
//         "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NGNiNmU2NjQ5ZWI5NmU2NTAxNDVkZDQiLCJpYXQiOjE2OTEwNTM2NzEsImV4cCI6MTY5MTA1NTQ3MSwidHlwZSI6ImFjY2VzcyJ9.XmS2yhrpVmiHDtTZtSRZ2vnh-nWiHHR7IWZPCW2gciM",
//         "expires": "2023-08-03T09:37:51.079Z"
//     },
//     "refresh": {
//         "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NGNiNmU2NjQ5ZWI5NmU2NTAxNDVkZDQiLCJpYXQiOjE2OTEwNTM2NzEsImV4cCI6MTY5MzY0NTY3MSwidHlwZSI6InJlZnJlc2gifQ.hNTOwrjRnd2vVdWZ2SKww8SBtwI-zYlyQ7_usoTeM3o",
//         "expires": "2023-09-02T09:07:51.081Z"
//     }
// }
// }