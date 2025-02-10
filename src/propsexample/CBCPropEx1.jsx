// import React, {Component} from 'react'

// class CBCPropEx1 extends Component{
//     render(){
//         console.log(this);
//         return (
//             <div>
//                 <h1>{this.props.username}</h1>
//                 <h2>{this.props.age  }</h2>
//                 {
//                     this.props.hobbies.map(Hobby=>{
//                         return <li>{Hobby}</li>
//                     })
//                 }
//                 {
//                     this.props.isMarred ? <h1>Married</h1>: <h1>Not married</h1>
//                 }
//                 <button on onClick={this.props.sendFun}>Click</button>
//             </div>
//         )
//     }
// }
// export default CBCPropEx1;