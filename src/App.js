import React from "react"
import axios from "axios"
import Movie from "./Movie"
import "./App.css"


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
     } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
     console.log(movies)
     this.setState({movies, isLoding:false })
    }

    componentDidMount () {
        this.getMovies()
    }     
    render(){
        const { isLoding, movies } = this.state
        return (
            <section class='container'>
               {isLoding ? (
                   <div class='loder'>
                       <span class='loder-text'>Loding...</span>
                   </div>                
                ) : (
                    <div class='movies'>
                      {
                       movies.map((movie) => {
                        console.log(movie);
                        return (
                            <Movie 
                                 key = {movie.id}
                                 id = {movie.id}
                                 year = {movie.year}
                                 title = {movie.title}
                                 summary = {movie.summary}
                                 poster = {movie.medium_cover_image}
                                 genres = {movie.genres}
                        />
                        )})}
                    </div>
                )}
                </section>
        )        
    }  
}

export default App