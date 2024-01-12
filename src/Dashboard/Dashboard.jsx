import React from 'react'
import bajaj from '../assets/bajaj.png'
import user from '../assets/user.png'
import mobile from '../assets/mobiledata.png'
import credit from '../assets/credit.png'
const Dashboard= () => {
  return (
    <div>
      <div style={{width:'25%'}}>
        <h2 style={{fontFamily:'Poppins', fontWeight:'bold'}}>Enter Your Bike Details</h2>
        <div style={{display:'flex', flexDirection:'column'}}>
        <label style={{fontFamily:'Poppins', fontWeight:'bold'}}>Bike Number</label>
        <input type="text" placeholder='EG:KA01BD2525'  style={{padding:'20px',border:'1px solid gray', borderRadius:'5px', fontFamily:'Poppins', fontSize:'18px', width:'150%'}} />
        </div>
        <button style={{padding:'10px', background:'rgb(20, 9, 80',  color:'#fff', fontWeight:'bold', fontFamily:'Poppins', borderRadius:'30px', fontSize:'16px', marginTop:'20px', position:'relative', left:'90%', }}>Insurance Another Bike</button>
      </div>

      <div>
      <h2 style={{fontFamily:'Poppins', fontWeight:'bold'}}>Insurance Histroy</h2>
      <div style={{display:'flex', flexDirection:'row', }}>
        <div style={{border:'1px solid gray', display:'flex', flexDirection:'row', width:'50vh', height:'15vh'}}>
          <div>
            <img src={bajaj} alt="" style={{width:'15%', height:'50%, ', marginLeft:'20px', position:'relative', top:'40px',}} />
          </div>
          <div style={{position:'relative',right:'30%'  }}>
            <p style={{fontWeight:'bold', fontFamily:'Poppins' , fontSize:'12px'}}>BajajAllienz</p>
            <p style={{color:'gray',fontFamily:'Poppins' , fontSize:'12px'}}> BikeNumber</p>
            <p style={{fontWeight:'bold', fontFamily:'Poppins', fontSize:'12px'}}>MH-1233456-Hero Honda</p>
          </div>
          <div>
            <button style={{border:'1px solid rgb(20, 9, 80)', position:'relative',  color:'rgb(20, 9, 80)',fontFamily:'Poppins',top:'40px', right:'20px',width:'6vh', padding:'6px'}}>₹ 108</button>
          </div>
          </div>


          <div style={{border:'1px solid gray', marginLeft:'10%', display:'flex', flexDirection:'row', width:'50vh', height:'15vh'}}>
          <div>
            <img src={bajaj} alt="" style={{width:'15%', height:'50%, ', marginLeft:'20px', position:'relative', top:'40px',}} />
          </div>
          <div style={{position:'relative', right:'30%', }}>
            <p style={{fontWeight:'bold', fontFamily:'Poppins' , fontSize:'12px'}}>BajajAllienz</p>
            <p style={{color:'gray',fontFamily:'Poppins' , fontSize:'12px'}}> BikeNumber</p>
            <p style={{fontWeight:'bold', fontFamily:'Poppins', fontSize:'12px'}}>MH-1233456-Hero Honda</p>
          </div>
          <div>
            <button style={{border:'1px solid rgb(20, 9, 80)', position:'relative',  color:'rgb(20, 9, 80)',fontFamily:'Poppins',top:'40px', right:'20px',width:'7vh', padding:'6px'}}>₹ 308</button>
          </div>
        
        </div>
      </div>
      </div>
      <div>
      <h2 style={{fontFamily:'Poppins', fontWeight:'bold'}}>What you get</h2>
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

    
  )
}

export default Dashboard
