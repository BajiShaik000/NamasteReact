import UserClass from "./UserClass";
import { Component } from "react";


class About extends Component{
    constructor(props) {
      super(props)
      
    }

    componentDidMount(){
      
    }
    
    render(){
        return (
            <div style={
                {
                    display: "flex",
                    flexDirection:"column",
                    height: "76vh"
                }
            }>
                <h1>Foodie Corner @ Satisfy your soul</h1>
    
                <UserClass name="Baji from Class" location="Hyderabad"/>
            </div>
        )
    }
}

// const About = () => {
//     return (
//         <div style={
//             {
//                 display: "flex",
//                 flexDirection:"column",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 height: "76vh"
//             }
//         }>
//             <h1>Foodie Corner @ Satisfy your soul</h1>

//             <UserClass name="Baji from Class" location="Hyderabad"/>
//         </div>
//     )
// }

export default About;