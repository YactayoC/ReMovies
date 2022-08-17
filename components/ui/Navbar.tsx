import Image from 'next/image';
import Link from 'next/link';

import styles from 'styles/Navbar.module.css';

const Navbar = () => {
  const onClickHamburguer = () => {
    const menuMobile = document.getElementById('menuMobile');
    if (menuMobile?.style.height === '0px') {
      return (menuMobile!.style.height = '12rem');
    }
    menuMobile!.style.height = '0px';
  };

  return (
    <nav className={styles.navbar}>
      {/* Desktop */}
      <div className={styles.navbarDesktop}>
        <ul>
          <Link href="/home">
            <h2>ReMovies</h2>
          </Link>
          <Link href="/home">
            <li>Inicio</li>
          </Link>
          <li>Peliculas</li>
        </ul>
        <ul>
          <li>
            <i className="fa-solid fa-magnifying-glass"></i>
          </li>
          <li>
            <i className="fa-solid fa-bell"></i>
          </li>
          <li>
            <img src="/profile.png" alt="profile" />
          </li>
        </ul>
      </div>

      {/* Mobile */}
      <div className={styles.navbarMobile}>
        <div>
          <ul>
            <Link href="/home">
              <h2>ReMovies</h2>
            </Link>
          </ul>
        </div>

        {/* Hamburguer */}
        <div className={styles.navbarHamburguer} onClick={onClickHamburguer}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>

      <div id="menuMobile" className={styles.navbarHamburguerMenu}>
        <ul>
          <li>Inicio</li>
          <li>Peliculas</li>
          <div className={styles.navbarHamburguerMenuIcons}>
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-solid fa-bell"></i>
            <img src="/profile.png" alt="profile" />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
