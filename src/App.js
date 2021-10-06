import React from "react"

class App extends React.Component {
    state = {
        isLoding: true,
        movies: []
    }

    componentDidMount () {
        setTimeout( () => {
            this.setState({isLoding: false})
        }, 6000)
    }
    render(){
        const { isLoding } = this.state
        return (
            <div>
               {isLoding ? 'Loding...' : '영화 데이터 출력'}
                </div>
        )        
    }  
}

export default App