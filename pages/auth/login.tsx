import Link from 'next/link';

import { AuthLayout, ButtonSubmit } from 'components';

import stylesNav from 'styles/Previous.module.css';
import stylesAuth from 'styles/Auth.module.css';

const LoginPage = () => {
  return (
    <AuthLayout title={'Removies Perú: Iniciar Sesión'}>
      <nav className={stylesNav.navbar}>
        <Link href="/">
          <h2>ReMovies</h2>
        </Link>
      </nav>
      <div className={stylesAuth.divForm}>
        <h2>Iniciar Sesión</h2>
        <form className={stylesAuth.form}>
          <div className={stylesAuth.formGroup}>
            <p>Correo:</p>
            <input type="email" placeholder="Ingresa tu email" />
          </div>
          <div className={stylesAuth.formGroup}>
            <p>Contraseña:</p>
            <input type="password" placeholder="Ingresa tu contraseña" />
          </div>
          <ButtonSubmit width="100%" fontSize="18px" borderRadius={true}>
            Iniciar sesión
          </ButtonSubmit>
          <div className={stylesAuth.formGroup}>
            <span>
              ¿No tienes una cuenta?
              <Link href="/auth/register">
                <a> Registrate</a>
              </Link>
            </span>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
