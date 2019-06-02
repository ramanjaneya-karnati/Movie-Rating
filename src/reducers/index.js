import {
  Actions
} from '../actions/index';
import {sortMoviesByRating} from '../utils'

function movies(state = [], action) {

  const copy = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case Actions.COMPONENT_INITIALIZING:
      return action.payload.movies;
      // eslint-disable-next-line no-unreachable
      break;
    case Actions.CHANGE_MOVIE_RATING:
      copy[action.payload.index].rating = action.payload.rating;
      return sortMoviesByRating(copy);
      // eslint-disable-next-line no-unreachable
      break;
    default:
      return state;
  }
}

function isRandRatingPlaying(state = false, action) {
  switch (action.type) {
    case Actions.COMPONENT_INITIALIZING:
      return false;
    case Actions.START_RANDOM_RATING:
      return true;
    case Actions.STOP_RANDOM_RATING:
      return false;
    default:
      return state;
  }
}

function randRatingText(state = '', action) {
  switch (action.type) {
    case Actions.COMPONENT_INITIALIZING:
      return '';
    case Actions.RANDOM_RATING_TEXT_CHANGE:
      return action.payload;
    default:
      return state;
  }
}

export default {
  movies,
  isRandRatingPlaying,
  randRatingText
}
