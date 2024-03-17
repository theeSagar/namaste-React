import { LOGO_URL } from "./utils/constants";
import { useState } from "react";

const Header = () => {

let btnName="Login"// This is the normal variable that can not update the state of the UI;
  const [btnNameState,setbtnNameState]= useState("Login");// this is state variable that works as the normal javaScript variable ."Login" is the default value.
  console.log("React will ReRender hole compoenent (Header) not just bellow {Logout}btn")
  return (
    <div className="header">
      {" "}
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL} // Using require syntax (logo is outside the src/app.js)
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login_btn"
            onClick={() => {
              if (btnNameState=="Login"){
                setbtnNameState("Logout")
                console.log(btnNameState);
              }
              else{
                setbtnNameState("Login");
              }
            }}
          >
            {btnNameState}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
