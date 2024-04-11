import { LOGO_URL } from "./utils/constants";
import useOnlineStatus from "./utils/useOnlineStatus";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // link work same as anchar tag(a) as browser do not understand Link is a wrapper over <a href> anchor tag.

const Header = () => {
  const onlineStatus = useOnlineStatus();
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
    <div className="flex justify-between bg-slate-50 shadow-lg mb-2 px-2 sm:bg-pink-100 lg:bg-slate-50">
      {" "}
      <div className="logo-container ">
        <img
          className="w-40"
          src={LOGO_URL} // Using require syntax (logo is outside the src/app.js)
        />
      </div>
      <div className="flex items-center p-8 m-1">
        <ul className="flex ">
          <li className="px-3 font-semibold">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="hover:text-rose-600	 font-semibold ">
            <Link to="/">Home</Link>
          </li>{" "}
          {/* dont use(a href)this to nevigate to other pages as this loads the page */}
          <li className="px-5 hover:text-rose-600	 font-semibold">
            <Link to="/about">About Us</Link>{" "}
            {/* Link is fast DO NOT reloads page just REFRESHES the components */}
          </li>
          <li className="px-5 hover:text-rose-600	 font-semibold">
            {" "}
            <Link to="/contact">Contact Us</Link>{" "}
            {/* Anchar tag reloads page */}
          </li>
          <li className="px-5 hover:text-rose-600	 font-semibold">
            <Link to="/grocery">Groceries</Link>
          </li>
          <li className="px-5 hover:text-rose-600	 font-semibold">Cart</li>
          <button
              className={`px-3 py-1 rounded-md font-semibold ${btnNameState === "Login" ? "bg-green-200 hover:bg-green-400" : "bg-red-200 hover:bg-red-400"}`}

            onClick={() => {
              if (btnNameState == "Login") {
                setbtnNameState("Logout");
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
