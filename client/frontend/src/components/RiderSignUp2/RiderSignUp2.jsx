import React from 'react'
import './RiderSignUp2.css'
import icon from '../../images/Icon.png'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom';

     

    

const RiderSignUp2 = ({ riderData }) => {
  
  const navigate = useNavigate();

    const [vehicleData, setVehicleData] = useState({
        vehicleType: '',
        color: '',
        model: '',
        chassisNumber: '',
        plateNumber: '',   
        ownedSince: '',
        vehicleDocuments: null,
      });

      const handleFileChange = (e) => {
        setVehicleData({ ...vehicleData, vehicleDocuments: e.target.files[0] });
      };   

      const handleChange = (e) => {
        const { name, value } = e.target;
        setVehicleData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

      const handleSubmit = async () => {
        try {
          // Combine riderData and vehicleData for the API request
          const combinedData = { ...riderData, ...vehicleData };
    
          const response = await fetch('https://fastx-logistic-api.onrender.com/v1/auth/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(combinedData),
          });
    
          if (response.ok) {
            // redirect to  home page

          
            navigate('/');
            console.log(response)
          } else {
            // Handle error response
            console.error('Registration failed:', response.statusText);
        }
    } catch (error) {
      // Handle fetch or other errors
      console.error('Error during registration:', error);
    }
  };



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
        </div>

        <div className='wrapper'>
        <div className="heading">
            <h1 className='heading__title'>Continue</h1>
            <span className='heading__content'>
            Welcome, Please enter your details
            </span>
        </div>
        

        <form onSubmit={handleSubmit}>

            <div className="form__wrapper">
                <div className="wrap">
                    <input type="text" placeholder='Type Vehicle'
                        onChange={handleChange}
                        name='vehicleType'
                        value={vehicleData.vehicleType}   
                    />
                    <input type="text" placeholder='Color'
                        onChange={handleChange}
                        name='color'
                        value={vehicleData.color} 
                    />
                </div>
                <input type='text' placeholder='Model'
                    onChange={handleChange}
                    name='model'
                    value={vehicleData.model}
                />
                <div className="wrap">
                    <input type="number" placeholder='Chasis Number'
                        onChange={handleChange}
                        name='chassisNumber'
                        value={vehicleData.chassisNumber}
                    />
                    <input type="number" placeholder='Plate Number' 
                        onChange={handleChange}
                        name='plateNumber'
                        value={vehicleData.plateNumber}
                    
                    />
                </div>
                
                <input type="text" placeholder='Owned since' className='form__span'
                    onChange={handleChange}
                    name='ownedSince'
                    value={vehicleData.ownedSince}
                />

                <div className="file-upload">
                    <input type="file" id="file-input" accept=".pdf, .doc, .docx" onChange={handleFileChange}/>
                    <div className="upload-icon">
                        <img src={icon} alt="Upload Icon"/>
                    </div>
                </div>

                <p className='file-upload--text form__span'>Please scan and upload all vehicle documents </p>

                <input type= "submit" value="CONTINUE" className='form__button form__span' />
            </div>
        </form>
        
</div>
    </section>
  )
}

export default RiderSignUp2
