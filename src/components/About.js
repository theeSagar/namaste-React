import User from "./User"
import UserClass from "../UserClass"
import React from "react"

class About extends React.Component{
    constructor(props){
        super(props);

        // console.log("parent constructor 1");
    }
    componentDidMount(){
        console.log("Child Component did mount,'End'")
        // Now my component has been rendered .i  will make API call and fill the data and reRender the component.That is why compoenent Did mount is used. 
      }

    render(){
        // console.log("Parent Render 2");
        return(

        <div className="aboutUs">
            <h1>About Us</h1>
            {/* <h1>About Us</h1>
            <h1>Back</h1>
            <h1>Call Us</h1> */}           

            <User  name={"Sagar from Function: Change name"}/>
            <UserClass  name={"Sagar Verma class based component."} Location={"Agra, Uttar Pradesh Class"}/> 
            {/* In class component we pass the props like above same as functional component  . Then this is called (userClass)*/}
            {/* <UserClass  name={"Doge Demoan class based component."} Location={"UK"}/>  */}
            {/* <UserClass  name={"VW Demoan class based component."} Location={"UK"}/>  */}
        </div>
        )
    }
}
/*
- Parent constructor 1
- Parent Render 2

    -Child Constructor 3
    -Child Render 4

    <DOM updated - IN single BATCH>

    -First Child ComponentDidMount
    -Second Child ComponentDidMount

- Parent ComponentDidMount

 */


// about with functional component---
// const About=()=>{
//     return(
//         <div className="aboutUs">
//             <h1>About Us</h1>
//             {/* <h1>About Us</h1>
//             <h1>Back</h1>
//             <h1>Call Us</h1> */}           

//             <User  name={"Sagar from Function: Change name"}/>
//             <UserClass  name={"Sagar Verma class based component."} Location={"Agra, Uttar Pradesh Class"}/> 
//             {/* In class component we pass the props like above same as functional component  */}
//         </div>
        

//     )
// }

export default About