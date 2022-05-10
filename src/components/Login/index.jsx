import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(true);

  const handleShowPassword = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };
  return (
    <main className={styles.container}>
      <form>
        <label htmlFor="user">
          <input type="text" id="user" name="user" placeholder="Usuário" />
        </label>
        <label htmlFor="lname">
          <input type={showPassword ? 'password' : 'text'} id="password" name="password" placeholder="Senha" />
          <button className={styles.containerBtnIcons} type="button" onClick={() => handleShowPassword()}>
            <i className="bi bi-eye-slash-fill" />
          </button>
        </label>
        <button className={styles.containerBtnLogin} type="button">
          Login
        </button>
        <button className={styles.containerBtnRegister} onClick={() => navigate('/register')} type="button">
          Registrar
        </button>
      </form>
    </main>
  );
}

export default Login;
