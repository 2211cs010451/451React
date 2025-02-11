// // import logo from './logo.svg';
// // import './App.css';
// // import React from "react";
// // function App() {
// //   let name="Bhanu";
// // return(
// // <div>
// //   Welcome to React<br></br>
// //   {name}
// //   {10*10}
// // </div>
// // )
// // }

// // export default App;

// // import React from "react";
// // class App extends React.Component{
// //   render(){
// //     return(
// //       <div>
// //         <h1>Class Component</h1>
// //       </div>
// //     )
// //   }
// // }
// // export default App;

// // import React from "react";
// // function App(){
// //   return(
// //     <div>
// //       <h1>functional Component</h1>
// //     </div>
// //   )}
// //   export default App;

// import React from "react";
// import Navbar from "./components/Navbar";
// import Main from "./components/Main";
// import Sidebar1 from "./components/Sidebar1";
// import Sidebar2 from "./components/Sidebar2";
// import Footer from "./components/Footer";
// function App(){
//   return(
//     <div className="app">
//       <Navbar></Navbar>
//       <Main></Main>
//       <div className="side">
//         <Sidebar1></Sidebar1>
//         <Sidebar2></Sidebar2>
//       </div>
//       <Footer></Footer>
//     </div>
//   )
// }
// export default App;

// rafce
// rcc
// rfce
// import React, { Component } from 'react';
// import CNCPropex1 from './propexample/CNCPropex1';

// export default class App extends Component {
//   render() {
//     return (
//       <div>App
//         <CNCPropex1 
//         username="charan"
//         age={20}
//         hobbies={["Gaming","Reading","Studying"]}
//         address={{city:"Hyd" , area:"Mandupur"}}
//         isMarried={true}
//         sendFun={function(){alert("Hi charan")}}/>
//       </div>
//     )
//   }  
// }

import React from 'react'
import SubChildProps from './propexample/SubChildProps'
import PropsChildrenex from './propexample/PropsChildrenex'

const App = () => {
  return (
    <div>
      <PropsChildrenex  username="charan" company="meta">
        <h1>Welcome charan</h1>
        <SubChildProps></SubChildProps>
      </PropsChildrenex>
    </div>
  )
}

export default App