export const sortMoviesByRating = (movies) => {
  return movies.sort(compare);
}

const compare = (a, b) => {
  let comparison = 0;
  if (a.rating < b.rating) {
    comparison = 1;
  } else {
    comparison = -1;
  }
  return comparison;
};
