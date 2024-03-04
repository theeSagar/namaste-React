import React from "react"; // this "react" is coming from node modules
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "ClassHEading" }, // these are
  "Hello World in React from app.JS"
);
// // this is creating h1 element inside the reactApp
// const root = ReactDOM.createRoot(document.getElementById("root")); //Now , we have to put "h1" element into our DOM(Browser).
// root.render(heading);

// console.log (heading)

// ----------------- -Practising creating nested elements in html

const felement = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { id: "heading" },
      "my name is sagar"
    ),
    React.createElement(
      "h1",
      { id: "heading" },
      "I am a H2 tag  Parent"
    ),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "SSD working fine1 "),
    React.createElement("h2", {}, "NOW SSD work fine 1"),
  ])
); //------------+++++++ to avoid all this above confusion we write in JSX---------------------+++--

const creatingDOMMy = ReactDOM.createRoot(document.querySelector(".lorem"));
creatingDOMMy.render(felement);
console.log(felement);
