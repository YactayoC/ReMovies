/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Link from 'next/link';

import { Button, PreviousLayout } from 'components';

import styles from 'styles/Previous.module.css';

const PreviousPage: NextPage = () => {
  return (
    <PreviousLayout title={'Removies Perú: Peliculas'}>
      <nav className={styles.navbar}>
        <h2>ReMovies</h2>
        <Link href="/auth/login">
          <Button displayFlex={true} fontSize="16px" borderRadius={true}>
            Iniciar sesión
          </Button>
        </Link>
      </nav>
      <div className={styles.heading}>
        <h1>Películas y series ilimitadas y mucho más</h1>
        <p>Disfruta donde quieras. Cancela cuando quieras.</p>
        <span>
          ¿Quieres ver ReMovies ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de ReMovies.
        </span>
      </div>

      <Link href="/home">
        <Button displayFlex={true} fontSize="30px" center={true}>
          <p>Comenzar</p>
          <i className="fa-solid fa-chevron-right"></i>
        </Button>
      </Link>
    </PreviousLayout>
  );
};

export default PreviousPage;
