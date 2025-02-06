import React, {Component} from "react"

class CBCStateEx extends Component{
    constructor(){
        super();
        this.state={
            university:"MRU"
        };
    }
    changeName=()=>{
        this.setState({university : "Mallareddy"});
    }
    render(){
        console.log(this);
        return(
            <div>CBCStateEx
                <h1>{this.state.university}</h1>
                <button onClick={this.changeName}>Change name</button>
            </div>
        )
    }
}

export default CBCStateEx;