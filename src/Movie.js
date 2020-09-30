import React, { Component } from 'react';

class Movie extends Component {
    constructor() {
        super();
    }

    render() {
        const { currentMovie } = this.props

        return(
            <div className="App wrapper">
                <section className="movie">
                    <h3>{currentMovie ? currentMovie.title : 'Movie Title Not Found'}</h3>
                    <div className="movieBox">
                        <button onClick={this.props.handleClickLeft} className="bigButt">
                            <i className="fas fa-chevron-circle-left"></i>
                        </button>
                        <div className="imgContainer">
                            <img src={currentMovie ? currentMovie.img : 'No poster = no posts. Try another'} alt={`The promotional poster for the movie ${currentMovie.title}`} />
                        </div>
                        <button onClick={this.props.handleClickRight} className="bigButt">
                            <i className="fas fa-chevron-circle-right"></i>
                        </button>
                    </div>
                    <p className="winner">{currentMovie ? currentMovie.title : 'Movie Title Not Found'}</p>
                </section>
            </div>
        )
    }
}

export default Movie;