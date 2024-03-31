// Now using class component-

import React from "react";
import { json } from "react-router-dom";

class UserClass extends React.Component {
  //This is how we use the props (writting this.props is mendatory.)
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
      userInfo: {
        name: "Dummy name", // this is same as passing default value in useState("Dummy name")
        location: "default location",
      },
    };
    // console.log("Child Constructor 3");
  }
  async componentDidMount() {
    // console.log("Child Component did mount")

    // API call here --

    const data = await fetch("https://api.github.com/users/theeSagar");
    const dataJson = await data.json();
    console.log(dataJson);
    this.setState({
      userInfo: dataJson, // in this now we are then adding api data to default userInfo
    });
  }
  componentDidUpdate() {
    console.log("At the end");
  }
  render() {
    // console.log("Child Render 4");

    // const {name,Location}=this.props (Destructuring )
    return (
      <div className="user_cardClassComp">
        <h1>Class Compoenent</h1>

        <h1>Count:{this.state.count}</h1>
        <h1>Count2:{this.state.count2}</h1>
        <button
          onClick={() => {
            // this.state.count=this.state.count+1;(never update state variables directly )
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Increment
        </button>
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name: {this.state.userInfo.name}</h2>
        <h3>Location : {this.state.userInfo.login}</h3>
        <h3>UserName : {this.state.userInfo.login}</h3>
        <h3>Contact: sagar@gmail.com</h3>
      </div>
    );
  }
}
export default UserClass;

/*
Full working (Life Cycle of react)

** Mounting Life cycle--

- constructor update with dummy data
-Render with (dummy data)
Now webpage is loaded with dummy data
    <html dummy data>
-componentDidMount is called
  <API> is called
  <this.setState>

** Update Cycle

- render is called but this time with <API >data 
- <html> is loaded with new API data (this time user will se the image and all API data)
-componentDidUpdate

*/
