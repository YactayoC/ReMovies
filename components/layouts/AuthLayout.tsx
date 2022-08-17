import Head from 'next/head';
import { FC } from 'react';

import styles from 'styles/Previous.module.css';

type Props = {
  title: string;
  children: React.ReactNode;
};

const AuthLayout: FC<Props> = ({ children, title }) => {
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

export default AuthLayout;
