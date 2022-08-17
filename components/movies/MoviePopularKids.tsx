import { FC } from 'react';

import Movie from 'components/ui/Movie';
import { TMovie } from 'interfaces/movies';

import styles from 'styles/Home.module.css';

interface Props {
  moviesPopularKids: TMovie[];
}

const MovieTheatre: FC<Props> = ({ moviesPopularKids }) => {
  return (
    <div className={styles.movies}>
      {moviesPopularKids.map((movie, index) => (
        <Movie key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MovieTheatre;
