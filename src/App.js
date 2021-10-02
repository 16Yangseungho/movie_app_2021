import {Component} from 'react'

class App extends Component {
    state = {
        count: 0  //선언이 더 필요하면 , 이후 추가
    }
 render() {
    return (
        <div>
        <h1>Rhe number is: {this.state.count} </h1>
        <button> Add</button>
        <button>Minus</button>
        </div>
    )
  }        
}

export default App