
import React from 'react'
import Counter from './components/Counter'

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
    <Counter
    count = {this.state.count}
    increment = {this.handleClickPlus}
    substract = {this.handleClickMoins}
     
    />
    
   </>
  ) 

  }

}

export default App






