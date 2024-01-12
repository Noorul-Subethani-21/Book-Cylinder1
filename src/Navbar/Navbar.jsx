import React from "react";
import logo from "../assets/logo.png";
import image from "../assets/image.png";
import { BellIcon } from "@chakra-ui/icons";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgb(20, 9, 80)",
        color: "black",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" , }}>
        <img
          src={logo}
          alt="Logo"
          style={{ width: "25vh", height: "90px", marginRight: "10px" }}
        />
        <span
          style={{
            fontSize: "25px",
            marginLeft: "10px",
            fontWeight: 500,
            fontFamily: "Poppins",
            color:'#fff'
          }}
        >
          <ArrowBackIcon 
          style={{marginLeft:'20px'}}
          />
          Bike Insurance
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginRight: "100px",
          gap: "20%",
        }}
      >
        <img
          src={image}
          alt="Profile"
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
        />
       <span
          style={{
            fontSize: "15px",
            marginLeft: "10px",
            fontWeight: 400,
            fontFamily: "Poppins",
            color:'#fff'
          }}
        >
          Priya Sharma
        </span>
        <KeyboardArrowDownIcon 
        style={{color:'#fff'}} />
        <BellIcon
          icon={BellIcon}
          style={{
            borderRadius: "50%",
            padding: "20px",
            color: "#00008B",
            background: "#fff",
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;