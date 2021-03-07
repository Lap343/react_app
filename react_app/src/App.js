import React from 'react';
import MovieCard from './MovieCard';
import MovieDetails from './MovieDeatails';
import MovieList from './MovieList';
import Modal from './Modal';
import { getMoviesByName, getMoviesById } from './utils';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      searchTerm: 'hello',
      isLoading: false,
      movies: null,
      error: null,
      showModal: false,
      currentMovie: null
    }

    // this.greet = this.greet.bind(this);
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
          error: error,
        })
      }
    }, 1);
    
  }

  componentDidUpdate() {
    console.log(this.state)
  }

  async onMovieCardClicked(movieId) {
    const movie = await getMoviesById(movieId)
    this.setState({
      currentMovie: movie,
      showModal: true
    })
  }

  // greet(){
  //   alert(this.state.greeting)
  // }

  closeModal() {
    console.log()
  }

  render(){

    const {currentMovie} = this.state;

    return (
      <>
      { this.state.isLoading 
        ? <h1>Loading Data</h1> 
          : (
          <>
          <Modal show={this.state.showModal} onClick={() => closeModal()} />
          {/* <button onClick={this.greet}>Click Me!!!</button> */}
            <MovieList 
              movies={this.state.movies?.Search} 
              render={({Title, Poster, Type }) => 
                <MovieCard 
                  onClick={() => this.onMovieCardClicked()}
                  title={Title} 
                  posterUrl={Poster} 
                  type={Type} />} />
            <Modal show='false' onClose={() => this.setModalstate(false)} />
            <MovieDetails 
              posterUrl={currentMovie?.Poster}
              title={currentMovie?.Title}
              rated={currentMovie?.Rated}
              runtime={currentMovie?.Runtime}
              genre={currentMovie?.Genre}
              rating={currentMovie?.Ratings[0].Value}
              plot={currentMovie?.Plot}
              actors={currentMovie?.actors}
            />
          </>
        )
      }
      </>
    )
  };
}

export default App;
