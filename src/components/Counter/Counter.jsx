import {Component} from "react"
import{Buttons} from "./Button.jsx"
import { CaunterValue } from "./CounterValue.jsx"

export class Counter extends Component{
    
    static defaultProps ={
        initialValue: 0
    }

  

    state = {
        value: this.props.initialValue,
    }
    
handleIncrement=()=>{
    // this.setState({
    //     value:5,
    // })

    this.setState((prevState)=>{
      return{
         value: prevState.value + 1
    }
})
}

handleDecrement=()=>{
    this.setState((prevState)=>{
        return{
           value: prevState.value - 1
      }
  })
}



    render(){
        return(
            <div className="Counter Counter__controls">
            <CaunterValue value={this.state.value}/>
            <Buttons onIncrement={this.handleIncrement}
                     onDecrement={this.handleDecrement}/>
          </div>
          )
    }
}


