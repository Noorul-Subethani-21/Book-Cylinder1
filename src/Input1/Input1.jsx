
import './Input1.css'
import React from 'react';


const Input1 = () => {

  return (
    <div>
   <div style={{display:'flex', flexDirection:'column'}} >
    <h2 style={{fontFamily:'Poppins', fontWeight:'bold'}}>Select Your Vehicle Model</h2>
    <label style={{fontFamily:'Poppins', fontWeight:'bold'}} >Vehicle Model</label>
    <input type="text" name="" id="" placeholder='Enter' style={{padding:'10px', borderRadius:'5px',width:'100%', fontFamily:'Poppins',  border:'1px solid gray'}} />
   </div>


   <div>
 <h2 style={{fontFamily:'Poppins', fontWeight:'bold', color:'rgb(20, 9, 80)'}}>You can select from the below list</h2>
 <div style={{display:'flex', flexDirection:'row', gap:'20%',marginLeft:'30px', padding:'10px'}}>
 <div className='input-container'>
      <div className='input-wrapper'>
        <label>
          <input type="text" placeholder='Activa 3G' style={{border:'none', width:'50vh', fontFamily:'Poppins', position:'relative', }} />
          <input
            type="checkbox"
            
          />
        </label>
      </div>
    </div>

    <div className='input-container'>
      <div className='input-wrapper'>
        <label>
          <input type="text" placeholder='Activa 3G' style={{border:'none', width:'50vh', fontFamily:'Poppins', position:'relative', }} />
          <input
            type="checkbox"
            
          />
        </label>
      </div>
    </div>

    </div>
    <div style={{display:'flex', flexDirection:'row', gap:'20%',marginLeft:'30px', padding:'10px'}}>
    <div className='input-container'>
      <div className='input-wrapper'>
        <label>
          <input type="text" placeholder='Activa 3G' style={{border:'none', fontFamily:'Poppins', position:'relative', width:'50vh'}} />
          <input
            type="checkbox"
            
          />
        </label>
      </div>
    </div>
 

    <div className='input-container'>
      <div className='input-wrapper'>
        <label>
          <input type="text" placeholder='Activa 3G' style={{border:'none', width:'50vh', fontFamily:'Poppins', position:'relative', }} />
          <input
            type="checkbox"
            
          />
        </label>
      </div>
    </div>
    </div>
    <div style={{display:'flex', flexDirection:'row', gap:'20%', marginLeft:'30px', padding:'10px'}}>

    <div className='input-container'>
      <div className='input-wrapper'>
        <label>
          <input type="text" placeholder='Activa 3G' style={{border:'none',width:'50vh', fontFamily:'Poppins', position:'relative', }} />
          <input
            type="checkbox"
            
          />
        </label>
      </div>
    </div>
 

    <div className='input-container'>
      <div className='input-wrapper'>
        <label>
          <input type="text" placeholder='Activa 3G' style={{border:'none',width:'50vh', fontFamily:'Poppins', position:'relative',}} />
          <input
            type="checkbox"
            
          />
        </label>
      </div>
    </div>
 </div>



 <div style={{display:'flex', flexDirection:'row', gap:'20%', marginLeft:'30px', padding:'10px'}}>

<div className='input-container'>
  <div className='input-wrapper'>
    <label>
      <input type="text" placeholder='Activa 3G' style={{border:'none', width:'50vh',fontFamily:'Poppins', position:'relative',}} />
      <input
        type="checkbox"
        
      />
    </label>
  </div>
</div>


<div className='input-container'>
  <div className='input-wrapper'>
    <label>
      <input type="text" placeholder='Activa 3G' style={{border:'none',width:'50vh', fontFamily:'Poppins', position:'relative'}} />
      <input
        type="checkbox"
        
      />
    </label>
  </div>
</div>
</div>

<div style={{display:'flex', flexDirection:'column', gap:'20%', marginLeft:'30px', padding:'10px'}}>

<div className='input-container'>
  <div className='input-wrapper' style={{width:'50%'}}>
    <label>
      <input type="text" placeholder='Activa 3G' style={{border:'none',  width:'50vh',fontFamily:'Poppins', position:'relative', }} />
      <input
        type="checkbox"
        
      />
    </label>
  </div>
</div>


<div className='input-container'>
  <div className='input-wrapper'  style={{width:'50%', marginTop:'30px'}}>
    <label>
      <input type="text" placeholder='Activa 3G' style={{border:'none', width:'50vh', fontFamily:'Poppins', position:'relative'}} />
      <input
        type="checkbox"
        
      />
    </label>
  </div>
</div>
</div>




    </div>
    <button style={{position:'relative', borderRadius:'30px', width:'15%', background:'rgb(20, 9, 80)', color:'#fff', fontFamily:'Poppins', padding:'10px', left:'55%'}}>Next</button>
    </div>
  )
}

export default Input1