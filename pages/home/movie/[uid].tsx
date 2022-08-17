/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps, NextPage } from 'next';

import { ButtonInfo, HeroSelected, HomeLayout, Navbar } from 'components';
import { formatDate, formatMoney } from 'utils';
import { getMovieDetailsAPI } from 'services';
import { createMovieDetailsAdapter } from 'adapters';
import { TMovie } from 'interfaces/movies';
import Loader from 'components/loader/loader';

import styles from 'styles/Movie.module.css';

interface Props {
  movieDetail: TMovie;
  isLoading: boolean;
}

const MovieSelectedPage: NextPage<Props> = ({ movieDetail, isLoading = true }) => {
  if (isLoading) {
    return <Loader />;
  }

  return (
    <HomeLayout title={`ReMovies | ${movieDetail.title}`}>
      <Navbar />
      <div className={styles.hero}>
        <div className={styles.heroInfo}>
          <h2>{movieDetail.title}</h2>
          <div className={styles.heroInfoEtiquets}>
            {movieDetail.genres!.map((genre: any) => (
              <p key={genre?.id}>{genre?.name}</p>
            ))}
          </div>

          <p>{movieDetail.description}</p>
          <div className={styles.heroButtons}>
            <ButtonInfo>
              <i className="fa-solid fa-bell"></i>
              Recordarmelo
            </ButtonInfo>
            <div>
              <i className="fa-solid fa-thumbs-up"></i>
              <i className="fa-solid fa-thumbs-down"></i>
            </div>
          </div>
        </div>
        <HeroSelected urlImage={`${movieDetail.hero}`} />
      </div>

      <div className={styles.info}>
        <div className={styles.infoDetails}>
          <h2>Details</h2>
          <ul>
            <li>
              <span>Posted on:</span> {formatDate(movieDetail.release_date!)}
            </li>
            <li>
              <span>Budget:</span> {formatMoney(movieDetail.budget!)}
            </li>
            <li>
              <span>Revenue:</span> {formatMoney(movieDetail.revenue!)}
            </li>
            <li>
              <span>Duration:</span> {movieDetail.runtime} minutes
            </li>
          </ul>
        </div>

        <div className={styles.infoGrapich}>
          <h2>Calification</h2>
          <div className={styles.infoGrapichVote}>
            <img src="/star.png" alt="star" />
            <h3>{movieDetail.votes!.toFixed(2)}</h3>
          </div>
        </div>

        <div className={styles.infoCompanies}>
          <h2>Production Companies</h2>
          <div className={styles.infoCompaniesLogo}>
            {movieDetail.production_companies!.map((production: any) => (
              <p key={production.id}>{production.name},</p>
            ))}
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { uid = '' } = params as { uid: string };
  const respMovieDetails = await getMovieDetailsAPI(uid);
  const movieDetail = createMovieDetailsAdapter(respMovieDetails);

  return {
    props: {
      movieDetail,
      isLoading: false,
    },
  };
};

export default MovieSelectedPage;
