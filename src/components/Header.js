import { LOGO_URL } from "./utils/constants";
import { useEffect, useState, useState } from "react";
import { Link } from "react-router-dom"; // link work same as anchar tag(a) as browser do not understand Link is a wrapper over <a href> anchor tag.

const Header = () => {
  let btnName = "Login"; // This is the normal variable that can not update the state of the UI;
  const [btnNameState, setbtnNameState] = useState("Login"); // this is state variable that works as the normal javaScript variable ."Login" is the default value.

  console.log(
    "React will ReRender hole compoenent (Header) not just bellow {Logout}btn"
  );

  // If no dependency array that means useEffrct is called on every component render
  // If dependenry array is their=> then useEffect is called on initial render just ONCE.
  // If dependency array is {btnNameState}=> called every time btnNameState is updated.
  useEffect(() => {
    console.log("useEffect Render");
  }, [btnNameState]);
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
          <li>
            <Link to="/">Home</Link>
          </li>{" "}
          {/* dont use(a href)this to nevigate to other pages as this loads the page */}
          <li>
            <Link to="/about">About Us</Link> {/* Link is fast DO NOT reloads page just REFRESHES the components */}
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact Us</Link> {/* Anchar tag reloads page */}
          </li>
          <li>Cart</li>
          <button
            className="login_btn"
            onClick={() => {
              if (btnNameState == "Login") {
                setbtnNameState("Logout");
                console.log(btnNameState);
              } else {
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
