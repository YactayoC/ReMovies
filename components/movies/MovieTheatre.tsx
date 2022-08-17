import { FC } from 'react';

import Movie from 'components/ui/Movie';

import { TMovie } from 'interfaces/movies';

import styles from 'styles/Home.module.css';

interface Props {
  moviesTheatres: TMovie[];
}

const MovieTheatre: FC<Props> = ({ moviesTheatres }) => {
  return (
    <div className={styles.movies}>
      {moviesTheatres.map((movie, index) => (
        <Movie key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MovieTheatre;
