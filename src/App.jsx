// import {Counter} from "./components/Counter/Counter.jsx"
import{PaintingList} from "./components/Painting/PaintingList.jsx"
import {Component} from "react"
import './App.css';
import paintingData from "./painting.json"

export class App extends Component{

    state={
      data:paintingData
    }
render(){
    return(
        <div>
            {/* <Counter initialValue={4}/> */}
            <PaintingList painting={this.state.data}/>
            
        </div>
     )
}
 
}

export default App;
