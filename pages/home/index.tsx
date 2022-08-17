/* eslint-disable @next/next/no-img-element */
import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

import { ButtonInfo, Hero, HomeLayout, MoviePopular, MoviePopularKids, MovieTheatre, Navbar } from 'components';
import Loader from 'components/loader/loader';
import { getMoviesPopularAPI, getMoviesPopularKidsAPI, getMoviesTheatresAPI } from 'services';
import { createMoviesAdapter } from 'adapters';
import { useAppSelector } from 'hooks';
import { TMovie } from 'interfaces/movies';

import styles from 'styles/Home.module.css';

interface Props {
  moviesTheatres: TMovie[];
  moviesPopular: TMovie[];
  moviesPopularKids: TMovie[];
  isLoading: boolean;
}

const HomePage: NextPage<Props> = ({ moviesTheatres, moviesPopular, moviesPopularKids, isLoading = true }) => {
  const { movieSelected } = useAppSelector((state) => state.movies);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <HomeLayout title="ReMovies">
      <Hero urlImage={movieSelected.hero}>
        <Navbar />
        <div className={styles.movieSelected}>
          <h3>{movieSelected.title}</h3>
          <p>{movieSelected.description}</p>
          {movieSelected.uid !== 0 && (
            <Link href={`/home/movie/${movieSelected.uid}`}>
              <ButtonInfo>
                <i className="fa-solid fa-circle-info"></i>
                Mas Información
              </ButtonInfo>
            </Link>
          )}
        </div>
      </Hero>
      <div className={styles.allMovies}>
        <div className={styles.movieCategory}>
          <h2>En Cines</h2>
          <MovieTheatre moviesTheatres={moviesTheatres} />
        </div>

        <div className={styles.movieCategory}>
          <h2>Peliculas Populares</h2>
          <MoviePopular moviesPopular={moviesPopular} />
        </div>

        <div className={styles.movieCategory}>
          <h2>Peliculas Populares Infantiles</h2>
          <MoviePopularKids moviesPopularKids={moviesPopularKids} />
        </div>
      </div>
    </HomeLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const respMoviesPopular = await getMoviesPopularAPI();
  const respMoviesPopularKids = await getMoviesPopularKidsAPI();
  const respMoviesTheatres = await getMoviesTheatresAPI();

  const moviesPopular = createMoviesAdapter(respMoviesPopular);
  const moviesPopularKids = createMoviesAdapter(respMoviesPopularKids);
  const moviesTheatres = createMoviesAdapter(respMoviesTheatres);

  return {
    props: {
      moviesPopular,
      moviesPopularKids,
      moviesTheatres,
      isLoading: false,
    },
    revalidate: 86400,
  };
};

export default HomePage;
