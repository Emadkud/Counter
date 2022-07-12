
import React from 'react'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      
      count : 0

  }
}

handleClickPlus = () => {
  
this.setState({
  count : this.state.count +1
})

}
handleClickMoins = () => {
  
this.setState({
  count : this.state.count -1
})

}





render(){
    
  return(
    <>
    <h1>Counter</h1>
    <h2> {this.state.count}</h2>
    
    <button type="button" class="btn btn-outline-success"onClick = {this.handleClickPlus}>+</button>
    <button type="button" class="btn btn-outline-danger"onClick = {this.handleClickMoins} >-</button>

   </>
  ) 

  }

}

export default App 






