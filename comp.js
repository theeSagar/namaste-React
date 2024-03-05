import React from "react"; // this "react" is coming from node modules
import ReactDOM from "react-dom/client";

const reactComp = <h1>Starting react components 👍---</h1>;
const reactCompRoot = ReactDOM.createRoot(document.querySelector(".reactComp"));

//------------------------------------ Components(TWO types) ------------------------------------

//Class Based Components (Old👎)
// Functional Components (New🤘)

// ----- Functional Components ---------

const HeadingComponent = () => {
  return <h2> This is React functional Component with return </h2>;
};
// ------=  Above and below codes components  are same.= ------------

const HeadingComponent2 = () => (
  <div className="container">
    <h1> This is React functional Component with out return</h1>
  </div>
);
const myNum = 50;
const Comp = () => (
  <>
    {" "}
    Below is component compositiuon--
    <HeadingComponent />
    <h5>
      <h6>{reactComp}</h6>reactCom k bad heding comp
      <HeadingComponent />
      Below is calling as an function
      {HeadingComponent()}
      <HeadingComponent></HeadingComponent>
      <p className="paraClass">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facilis
        facere perferendis maiores ducimus error beatae asperiores, temporibus
        odit, cumque libero dolor nostrum mollitia nesciunt nihil adipisci
        quaerat labore. Sint, molestiae repellat a quis fugit nobis debitis sed
        nesciunt sequi doloremque incidunt dolore est harum aperiam dolorum
        repellendus laborum molestias.
      </p>
    </h5>
  </>
);

//For rendering single components--
//reactCompRoot.render(<HeadingComponent2/>)
// For rendering multiple comoponents--

reactCompRoot.render(
  <>
    <HeadingComponent />
    <HeadingComponent2 />
    <Comp />
  </>
);
