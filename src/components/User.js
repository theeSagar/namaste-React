import React, { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2, setcount2] = useState(1);

  const incrementCount = () => {
    if (count < 20) {
      setCount(count + 1);
      setcount2(count2 + 1);
    }
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
      setcount2(count2 - 1);
    }
  };

  return (
    <div className="user_cardFuncComp">
      <h1>Functional Compoenent</h1>
      <h2>Name: {name}</h2>
      <h1>Count: {count}</h1>
      <h1>Count2: {count2}</h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <h3>Location: Agra, Uttar Pradesh</h3>
      <h3>Contact: sagar@gmail.com</h3>
    </div>
  );
};

export default User;
