import { FC } from 'react';

import Movie from 'components/ui/Movie';
import { TMovie } from 'interfaces/movies';

import styles from 'styles/Home.module.css';

interface Props {
  moviesPopular: TMovie[];
}

const MovieTheatre: FC<Props> = ({ moviesPopular }) => {
  return (
    <div className={styles.movies}>
      {moviesPopular.map((movie, index) => (
        <Movie key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MovieTheatre;
