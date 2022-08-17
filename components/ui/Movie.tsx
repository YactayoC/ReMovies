/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import { useRouter } from 'next/router';

import { TMovie } from 'interfaces/movies';
import { DivInfo } from 'components/styled-components/DivInfo';

import styles from 'styles/Home.module.css';
import { useAppDispatch } from 'hooks';
import { onSelectMovie } from 'store/movies';

interface Props {
  movie: TMovie;
}

const Movie: FC<Props> = ({ movie }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onClickSelectMovie = () => {
    dispatch(onSelectMovie(movie));
    router.push(`/home/movie/${movie.uid}`);
  };

  return (
    <DivInfo onClick={onClickSelectMovie}>
      <img src={movie.poster} alt={movie.title} />
    </DivInfo>
  );
};

export default Movie;
