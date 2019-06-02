import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Actions, raiseAction} from '../actions'
import WebComponent from '../components/MovieListWrapper'
import moviesJson from '../data/movies'
import {sortMoviesByRating} from '../utils'

let randomInterval;

class App extends Component {


    componentDidMount() {
        const {
            actions
        } = this.props;
        moviesJson.forEach((movie) => {
            movie.rating = Math.floor((Math.random() * 10) + 1);
        });
        actions.raiseAction(Actions.COMPONENT_INITIALIZING, {movies: sortMoviesByRating(moviesJson)})
    }


    onMovieRatingChangeHandler = (index, rating) => {
        const {
            actions
        } = this.props;
        actions.raiseAction(Actions.CHANGE_MOVIE_RATING, {index, rating});
    };

    startRateRandomMovie = () => {
        const {movies, actions} = this.props;
        actions.raiseAction(Actions.START_RANDOM_RATING);
        randomInterval = setInterval(function () {
            const whichMovie = Math.floor((Math.random() * movies.length - 1) + 1);
            const rating = Math.floor((Math.random() * 10) + 1);
            const text = `Movie: ${movies[whichMovie].title} ,Old Rating:${movies[whichMovie].rating}  New Rating: ${rating}`;
            actions.raiseAction(Actions.CHANGE_MOVIE_RATING, {index: whichMovie, rating});
            actions.raiseAction(Actions.RANDOM_RATING_TEXT_CHANGE, text);
        }, 1000);
    };

    stopRateRandomMovie = () => {
        const {actions} = this.props;
        clearInterval(randomInterval);
        actions.raiseAction(Actions.STOP_RANDOM_RATING);
    };

    render() {

        const {
            movies,
            isRandRatingPlaying,
            randRatingText
        } = this.props;

        const props = {
            movies,
            isRandRatingPlaying,
            randRatingText,
            onMovieRatingChangeHandler: this.onMovieRatingChangeHandler,
            stopRateRandomMovie: this.stopRateRandomMovie,
            startRateRandomMovie: this.startRateRandomMovie
        };

        return (<WebComponent {...props}/>)
    }
}

function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        ...state,
    }
}

function mapDispatchToProps(dispatch, ownprops) {
    return {
        actions: bindActionCreators({raiseAction}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
