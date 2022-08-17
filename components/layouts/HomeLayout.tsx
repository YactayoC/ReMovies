import Head from 'next/head';
import { FC } from 'react';

import styles from 'styles/Home.module.css';

type Props = {
  title: string;
  children: React.ReactNode;
};

const HomeLayout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <main className={styles.background}>
        <div>{children}</div>
      </main>
    </>
  );
};

export default HomeLayout;
