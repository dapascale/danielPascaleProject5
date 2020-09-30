import React, { Component } from 'react';
import axios from 'axios';
// import firebase from './firebase';
// import CommentList from './CommentList';

class Movie extends Component {
    constructor() {
        super();
        // this.state = {
        //     movieList: [],
        //     currentMovie: {},
        //     currentMovieIndex: 0,
        // }
    }

    // componentDidMount() {
    //     this.fetchPosters();
    // }

    // fetchPosters = () => {
    //     // TMDB API Key
    //     const apiKey = '3a88c3b23db1c59c856ca8f70aa6fb16';

    //     // Image path preceder for posters
    //     const imgPath = 'http://image.tmdb.org/t/p/original';

    //     // Array with movie IDs to fetch movies
    //     const movieIDs = [
    //         594084, // guestHouse
    //         694919, // moneyPlane
    //         550412, // halloweenJack
    //         582218, // psych2
    //         726739, // catsAndDogs
    //     ];

    //     // Create a variable for the movie list array
    //     const movieList = [];

    //     // Make an API call to retrieve movie data using the ID's in the array
    //     movieIDs.forEach(movie => {
    //         axios({
    //             url: `https://api.themoviedb.org/3/movie/${movie}`,
    //             params: {
    //                 api_key: apiKey,
    //                 language: 'en-US',
    //             },
    //         })
    //         .then(results => {
    //             // Store the data in a variabale
    //             const movie = results.data;
    //             // Store the specific bits of data needed (Poster, Title, ID) in an object
    //             const movieObj = {
    //                 id: movie.id,
    //                 title: movie.original_title,
    //                 img: imgPath + movie.poster_path
    //             }
    //             // Push each object to the movieList array
    //             movieList.push(movieObj)
    //             // Update state to the new movie list array
    //             // The below 
    //             this.setState({
    //                 movieList
    //             })
    //         })
    //     })
    // }

    // componentDidUpdate() {
    //     if (this.state.movieList.length) {
    //         const currentMovie = this.state.movieList[this.state.currentMovieIndex]
    //         this.props.movieChange(currentMovie)
    //     }
    //     console.log('movie updated')
    // }

    render() {
        const { currentMovie } = this.props

        return(
            <div className="App">
                <section className="movie">
                    <h3>{currentMovie ? currentMovie.title : 'Movie Title Not Found'}</h3>
                    <div className="movieBox">
                        <button onClick={this.props.handleClickLeft}>
                            <i className="fas fa-chevron-circle-left"></i>
                        </button>
                        <div className="imgContainer">
                            <img src={currentMovie ? currentMovie.img : 'No poster = no posts. Try another'} alt={`The promotional poster for the movie ${currentMovie.title}`} />
                        </div>
                        <button onClick={this.props.handleClickRight}>
                            <i className="fas fa-chevron-circle-right"></i>
                        </button>
                    </div>
                    <p>#1 Comment!!</p>
                </section>
            </div>
        )
    }
}

export default Movie;