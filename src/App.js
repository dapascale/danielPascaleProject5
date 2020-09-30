import React, { Component } from 'react';
import Movie from './Movie';
import CommentList from './CommentList';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      movieList: [],
      currentMovie: {},
      currentMovieIndex: 0,
    }
  }

  componentDidMount() {
    this.fetchPosters();
  }

  fetchPosters = async () => {

    // TMDB API key
    const apiKey = '3a88c3b23db1c59c856ca8f70aa6fb16';
    const imgPath = 'http://image.tmdb.org/t/p/w185';
    // Array with movie IDs to fetch movies
    const movieIDs = [
      594084, // guestHouse
      694919, // moneyPlane
      550412, // halloweenJack
      582218, // psych2
      726739, // catsAndDogs
    ];
    // create an array of promises for the movies in the moviesID array
    const movieDataToGet = movieIDs.map(movie => {
      return axios({
        url: `https://api.themoviedb.org/3/movie/${movie}`,
        params: {
          api_key: apiKey,
          language: 'en-US',
        }
      });
    })
    // wait for all the promises for the movies to be completed
    const movieResults = await Promise.all(movieDataToGet);
    // place holder movieList to later be used to set the movieList state
    const movieList = [];
    // for each movie in movieResults create an object of the id, title, and img
    // and push the object into the 'staged' movieList array
    movieResults.forEach(movieResult => {
      const movie = movieResult.data;
      const movieObj = {
        id: movie.id,
        title: movie.original_title,
        img: imgPath + movie.poster_path
      }
      movieList.push(movieObj)
    });
      this.setState({
        movieList,
        currentMovie: movieList[this.state.currentMovieIndex]
      })
  }


  // componentDidUpdate() {
  //   if (this.state.movieList.length) {
  //     this.setState({
  //       currentMovie: this.state.movieList[this.state.currentMovieIndex]
  //     }) 
  //     // this.props.movieChange(currentMovie)
  //   }
  //   console.log('movie updated')
  // }

  movieChange = (movie) => {
    this.setState({
      currentMovie: movie
    })
  }

  handleClickRight = () => {
    let currentMovieIndex = this.state.currentMovieIndex + 1;
    if (currentMovieIndex >= this.state.movieList.length) {
      currentMovieIndex = 0;
    }
    this.setState({
      currentMovieIndex,
      currentMovie: this.state.movieList[currentMovieIndex]
    })
  }

  handleClickLeft = () => {
    let currentMovieIndex = this.state.currentMovieIndex - 1;
    if (currentMovieIndex < 0) {
      currentMovieIndex = this.state.movieList.length - 1
    }
    console.log(currentMovieIndex)
    this.setState({
      currentMovieIndex,
      currentMovie: this.state.movieList[currentMovieIndex]
    })
  }

  render() {
    console.log('Andre is awesome!')
    // let currentMovie = '';

    // if (this.state.movieList.length) {
    //   currentMovie = this.state.movieList[this.state.currentMovieIndex]
    //   // this.props.movieChange(currentMovie)
    // }

    return (
      <div className="App">
        <Movie
        movieChange={this.movieChange}
        currentMovie={this.state.currentMovie}
        handleClickLeft={this.handleClickLeft}
        handleClickRight={this.handleClickRight}
        />
        <CommentList />
      </div>
    );
  }
}

export default App;
