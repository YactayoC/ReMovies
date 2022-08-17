import { TMovie } from "interfaces/movies";

export const createMoviesAdapter = (movies: any) => {
  const allMovies: Array<TMovie> = [];
  const urlImg = 'https://image.tmdb.org/t/p/w1280';

  movies.results.forEach((movie: any) => {
    allMovies.push({
      uid: movie.id,
      title: movie.title,
      description: movie.overview,
      hero: urlImg + movie.backdrop_path,
      poster: urlImg + movie.poster_path,
    });
  });

  return allMovies;
};

export const createMovieAdapter = (movie: any) => {
  return {
    uid: movie.uid,
    title: movie.title,
    description: movie.description,
    hero: movie.hero,
    poster: movie.poster,
  };
};

export const createMovieDetailsAdapter = (movie: any) => {
  const urlImg = 'https://image.tmdb.org/t/p/w1280';

  return {
    uid: movie.id,
    title: movie.original_title,
    mini_description: movie.tagline,
    description: movie.overview,
    hero: urlImg + movie.backdrop_path,
    poster: urlImg + movie.poster_path,
    votes: movie.vote_average,
    release_date: movie.release_date,
    budget: movie.budget,
    revenue: movie.revenue,
    genres: movie.genres,
    runtime: movie.runtime,
    production_companies: movie.production_companies,
  };
};
