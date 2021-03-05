import React from 'react';
import MovieCard from './MovieCard';
import MovieDetails from './MovieDeatails';
import { getMoviesByName } from './utils';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      searchTerm: 'Superman',
      isLoading: false,
      movies: null,
      error: null
    }
  }

  async componentDidMount(){
    this.setState({
      isLoading: true
    });

    setTimeout( async () => {
      try {
        const movieData = await getMoviesByName(this.state.searchTerm)
        this.setState({
          isLoading: false,
          movies: movieData,
          error: null
        })
      } catch (error){
        this.setState({
          isLoading: false,
          movies: [],
          error: error
        })
      }
    }, 1);
    
  }

  componentDidUpdate() {
    console.log(this.state)
  }

  render(){
    return (
      <>
      { this.state.isLoading 
        ? <h1>Loading Data</h1> 
          : (
          <>
            {this.state.movies &&
                this.state.movies.Search.map((movie, index) => (<MovieCard key={movie.imdbID} title={movie.Title} posterUrl={movie.Poster} type={movie.Type} />)) 
              }
            <MovieDetails 
              posterUrl="https://upload.wikimedia.org/wikipedia/en/8/83/Batman_returns_poster2.jpg"
              title="Batman v Superman"
              rated="PG-13"
              runtime={183}
              // genre="Sci-fi"
              rating={0}
              plot="Batman kicks some butt!!!"
              actors="Batman and the Joker"
            />
          </>
        )
      }
      </>
    )
  };
}

export default App;
