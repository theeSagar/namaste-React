import React from "react"; // this "react" is coming from node modules
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


const root = ReactDOM.createRoot(document.querySelector("#root"));

 
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <ul>
          <li>Home</li>
          <li>Abour </li>
          <li>Center</li>
          <li>Read More</li>
        </ul>
      </div>
    </footer>
  );
};

// All app components rendered below-

const AppLayout = () => {
  console.log(<Body/>)
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

root.render(<AppLayout />);


