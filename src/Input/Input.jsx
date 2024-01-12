import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './Input.css';

const Input = () => {
  return (
    <div className='form-container'>
      <div className='input-container'>
        <label>Bike Number</label>
        <div className='input-wrapper'>
          <input type="text" placeholder='MH123456' />
          <button>Change</button>
        </div>
      </div>

      <div className='input-container'>
        <label>Which Bike do you Ride?</label>
        <div className='input-wrapper'>
          <input type="text" placeholder='Activa 3G' />
          <SearchIcon style={{position:'relative', left:'60%', width:'20%'}} />
        </div>
      </div>

      <div className='input-container'>
        <label>When was Your Bike registration</label>
        <div className='input-wrapper'>
          <input type="text" placeholder='2023' />
          <ArrowDropDownIcon style={{position:'relative', left:'60%', width:'20%'}} />
        </div>
      </div>

      <div >
        <p>Has a Previous Policy expired more Than 90days before?</p>
        <div style={{position:'relative', right:'10%', gap:'10%', marginLeft:'15%'}}>
          <button style={{width:'10%', background:'green', padding:'10px', borderRadius:'5px' }}>Yes</button>
          <button style={{width:'10%', background:'#fff', color:'rgb(20, 9, 80)',borderRadius:'5px', padding:'10px',marginLeft:'10px', border:'1px solid rgb(20, 9, 80)' }}>No</button>
        </div>
      </div>
      <button style={{background:'rgb(20, 9, 80)', position:'relative', left:'30%', padding:'10px', borderRadius:'20px', margin:'20px', width:'30%', color:'#fff', fontFamily:'Poppins'}}>View Quotes</button>
    </div>
  );
};

export default Input;
