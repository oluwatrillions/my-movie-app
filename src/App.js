import { useEffect, useState } from 'react';
import Movies from './Movies';
import axios from 'axios'

function App() {

    const movie_api = 'https://www.omdbapi.com/?s=star%20wars&apikey=98cbfa52'

          const [movies, setMovies] = useState([])
        try {
                useEffect(() => {
                axios(movie_api)
                    .then((response) => {
                        console.log(response.data.Search);
                        setMovies(response.data.Search)
                    })
            }, [])
        } catch (error) {
            console.log(error);
        }
        return (
        <div className="App">
         <h1>{movies.map((movie) => {
            const {Poster,Title, Year, imdbID} = movie
            return <div key={imdbID}>
                {Title}
                {Year}
                <img src={Poster} alt={Title} />
                </div>
        }) }</h1>
    </div>
  );
}

export default App;
