import { Component } from "react";

class Handlingclass extends Component {

    handleclick() {
        console.log("I already handled it!")
    }

    render() {
        return (
            <>
                Handling Events in Class Component
                <button onClick={this.handleclick}>Click Me</button>
            </>
        )
    }
}

export default Handlingclass;