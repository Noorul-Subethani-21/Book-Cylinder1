import React, { useState } from 'react';
import user from '../assets/user.png';
import mobile from '../assets/mobiledata.png';
import credit from '../assets/credit.png';

const Dashboard1 = () => {
  const [bikeNumber, setBikeNumber] = useState('');
  const [isInputClicked, setIsInputClicked] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (event) => {
    setBikeNumber(event.target.value);
    setIsInputClicked(false);
    setErrorMsg('');
  };

  const handleSubmit = () => {
    if (!isValidBikeNumber(bikeNumber)) {
      setIsInputClicked(true);
      setErrorMsg('Please enter a valid Register number.');
    } else {
      // Handle form submission logic here
      setErrorMsg('');
      console.log('Form submitted successfully');
    }
  };

  const isValidBikeNumber = (number) => {
    // Add your validation logic here
    // For simplicity, let's assume a valid bike number should have a length of 10
    return number.length === 10;
  };

  return (
    <div>
      <div style={{ width: '25%' }}>
        <h2 style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>Enter Your Bike Number</h2>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>lorem ipsum doller sit amet conectetur</label>
          <input
            type="text"
            placeholder="EG:KA01BD2525"
            style={{
              padding: '20px',
              border: `1px solid ${isInputClicked ? 'red' : 'gray'}`,
              borderRadius: '5px',
              fontFamily: 'Poppins',
              fontSize: '18px',
              width: '150%',
            }}
            value={bikeNumber}
            onChange={handleInputChange}
          />
          {isInputClicked && !isValidBikeNumber(bikeNumber) && (
            <p style={{ color: 'red', fontFamily: 'Poppins', marginTop: '5px' }}>{errorMsg}</p>
          )}
        </div>
        <button
          style={{
            padding: '10px',
            background: 'rgb(20, 9, 80)',
            color: '#fff',
            fontWeight: 'bold',
            fontFamily: 'Poppins',
            borderRadius: '30px',
            fontSize: '16px',
            marginTop: '20px',
            position: 'relative',
            left: '90%',
            width: '30%',
          }}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>

      <div>
        <h2 style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>What you get</h2>
        <div style={{display:'flex', flexDirection:'row', padding:'20px', }}> 
      <img src={user} style={{width:'4%', height:'1%', marginTop:'10px'}} />
      <p style={{marginLeft:'20px', fontFamily:'Poppins'}}>Buying bike insurance online also enables you to avail the compulsory Personal Accident cover.<br /> You must purchase this cover separately, and it provides coverage of up to Rs. 15 lakhs against accidental injury/<br /> death of the owner of the insured two-wheeler</p>
      </div>
      <div style={{display:'flex', flexDirection:'row', padding:'20px'}}> 
      <img src={mobile}   style={{width:'4%', height:'1%', marginTop:'10px'}} />
      <p style={{marginLeft:'20px', fontFamily:'Poppins'}}>NCB or No Claim Bonus is the discount offered by the insurers to the policyholders (own damage cover) <br />who do not raise a claim during the policy period. If you buy a new two-wheeler,<br /> you can easily transfer the NCB while buying a new bike insurance policy online.</p>
      </div>
      <div style={{display:'flex', flexDirection:'row', padding:'20px'}}> 
      <img src={credit}  style={{width:'4%', height:'1%', marginTop:'10px'}} />
      <p style={{marginLeft:'20px', fontFamily:'Poppins'}}>A Comprehensive Bike Insurance Policy offers financial coverage if your insured two-wheeler suffers damages due to accidents,<br /> fire damages, damages due to natural or man-made disasters or theft.<br /> The two wheeler insurance policy also covers third-party liabilities.</p>
      </div>
      
      </div>
    </div>
  );
};

export default Dashboard1;
