import React from "react";

class Counter extends React.Component{
    constructor() {
        super()
    
      
    
      }
      render() {
      return(

        <div>
        <h2>
         {this.props.count}
        
         </h2>
    
        <button type="button" class="btn btn-outline-success"onClick = {this.props.increment}>+</button>
        <button type="button" class="btn btn-outline-danger"onClick = {this.props.substract}>-</button>
    
         </div>
    

      )

    }
}

export default Counter














{/* <h2> {this.state.count}</h2>
    
<button type="button" class="btn btn-outline-success"onClick = {this.handleClickPlus}>+</button>
<button type="button" class="btn btn-outline-danger"onClick = {this.handleClickMoins} >-</button> */}
