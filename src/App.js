import axios from "axios"
import React from "react"

class App extends React.Component {
    state = {
        isLoding: true,
        movies: []
    }

    getMovies = async () =>{
        const {
            data:{
            data: {movies}
        }
     } = await axios.get('https://yts-proxy.now.sh/list_movies.json')
     this.setState(movies)
    }

    componentDidMount () {
        this.getMovies()
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