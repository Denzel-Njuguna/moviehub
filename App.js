import React, { useState } from 'react';
import './App.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import MovieCard from './MovieCard';

// e13d9c34
const API_URL = ' http://www.omdbapi.com/?i=tt3896198&apikey=e13d9c34';

const App=()=>{
    const [movies, setmovies] = useState([]);
    const [searchitem, setsearchitem] = useState('')
    
    const searchmovies = async(title)=>{
        if(!title.trim){
            alert('please enter a movie title')
        }
            const response = await fetch(`${API_URL}&s=${title}`);
            const  data = await response.json();
            setmovies(data.Search)
    }
    const handlekeypress = (e)=>{
        if(e.key === 'Enter'){
            searchmovies(()=>{
                if(!searchitem.trim){
                    alert('please enter a movie title')
                }
            })
        }
    }

    return(
        <div className='app'>
            
                <h1 >
                    moviehub
                </h1>
            

    <div className='search'>
    <input className='box'
     placeholder='Search for movies' 
     type='text' value={searchitem}
     onChange={(e)=>setsearchitem(e.target.value)}
     onKeyDown={handlekeypress}
     />
    <img src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
     alt='search'
     onClick={()=>searchmovies(searchitem)}
     />
    </div>
    

   
    {movies.length > 0 ? (
        <div className='container'>
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      ) : (
        <div className='empty'>
          <h2>There are no movies to be shown</h2>
        </div>
      )}
       
 
</div>
    );
}
//

export default App;