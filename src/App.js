import { useEffect, useState } from 'react';
import './App.css'
import Movies from './Movies';
import axios from 'axios'

function App() {
    const API_KEY = '98cbfa52'
    const movie_api = `https://www.omdbapi.com/?s=avengers&apikey=${API_KEY}`
    

        const [search, setSearch] = useState('')
        const [movies, setMovies] = useState([])

            useEffect(() => {
                axios(movie_api)
                    .then((response) => {
                        console.log(response.data);
                        setMovies(response.data.Search)
                    })
            }, [search])

    const searchBtn = async (title) => {
        const searchURL = `https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`
        console.log(search);
        console.log(API_KEY);

        const info = await axios(searchURL)
                        .then(response => response.json())
                            .then(data => setMovies(data.Search))
                                .catch(error => console.log(error))
                    
}
    
    return (
        <>
            <div className='search'>
                <h2>Movie App</h2>
                <div className='search-box'>
                    <form type='text'>
                        <input type='text' value={search} onChange={((e) => setSearch(e.target.value))} />
                        <button onClick={() => searchBtn(search)}>Search</button>
                    </form>
                </div>
            </div>
            <div className="App">           
            {movies.map((movie) => (
                <Movies key={ movie.imdbID} {...movie} />
            ))
        }
    </div>
            </>
  );
}

export default App;
