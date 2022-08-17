import styles from 'styles/Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles["lds-dual-ring"]}></div>
    </div>
  );
};

export default Loader;
