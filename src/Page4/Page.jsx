import React from 'react'
import jio from '../assets/jio.png'
const Page = () => {
  return (
    <div>
      <h2 style={{fontWeight:'bold', fontFamily:'Poppins'}}>Postpaid Bill</h2>
      <hr  style={{color:'rgb(20, 9, 80)', width:'170vh'}}/>
      <div style={{display:'flex', flexDirection:'row'}}>
        <div>
          <img src={jio} alt="jio image"  style={{width:'50%', height:'100%'}}/>
          </div>
          <div style={{display:'flex', flexDirection:'column', position:'relative', right:'5%'}}>
          <p style={{fontWeight:'bold', fontFamily:'Poppins'}}>Rayana Saris</p>
          <span style={{ fontFamily:'Poppins', }}>+91123456789</span>
          </div>
        </div>

        <div>

         <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', width:'50%' , position:'relative', right:'9%'}}>
          <h4 style={{color:'rgb(20, 9, 80)', fontSize:'22px' ,fontFamily:'Poppins'}}>BILL DETAILS</h4>
          <h4 style={{color:'rgb(20, 9, 80)',   fontSize:'22px',fontFamily:'Poppins'}}>HIDE</h4>
         </div>
        </div>

        <div>
          <p style={{fontFamily:'Poppins', marginTop:'0px'}}>Customer Names : Rayana Saris<br />
             Bill Number : 47003689<br />
             Early Payment Date : 01- Sep- 2023

          </p>
        </div>
        <div style={{border:'1px solid black', padding:'10px', width:'40%' , borderRadius:'12px'}}>
          <span style={{color:'rgb(20, 9, 80)', fontSize:'30px', fontFamily:'Poppins', fontWeight:'bold'}}>₹1,149</span>
          <p style={{fontFamily:'Poppins', color:'red', fontWeight:'bold' }}>Due Date : 28-Sep-2023</p>
        </div>

      <button style={{marginTop:'20px', background:'rgb(20, 9, 80)', color:'#fff', borderRadius:'30px', padding:'10px', width:'22%', fontFamily:'Poppins', fontWeight:'bold', marginLeft:'20%', fontSize:'20px'}}>Proceed To Pay</button>
              </div>
    
  )
}

export default Page