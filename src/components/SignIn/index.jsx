import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import styles from './styles.module.scss';

function SignIn() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(true);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleShowPassword = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      email: user,
      password,
    };
    api.post('/authaccount/login', data)
      .then((respo) => {
        if (respo.data.code === 1) {
          console.log(respo.data.code);
          alert(`${respo.data.message}`);
          navigate('/');
        } else {
          setUser('');
          setPassword('');
          console.log(respo.data.data.Token);
          localStorage.setItem('key', JSON.stringify(respo.data.data.Token));
          navigate('/users');
        }
      })
      .catch((error) => {
        setUser('');
        setPassword('');
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };

  return (
    <main className={styles.container}>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="user">
          <input
            type="text"
            id="user"
            name="user"
            placeholder="Usuário"
            value={user}
            onChange={({ target }) => setUser(target.value)}
          />
        </label>
        <label htmlFor="password">
          <input
            type={showPassword ? 'password' : 'text'}
            id="password"
            name="password"
            placeholder="Senha"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <button className={styles.containerBtnIcons} type="button" onClick={() => handleShowPassword()}>
            <i className="bi bi-eye-slash-fill" />
          </button>
        </label>
        <button className={styles.containerBtnLogin} type="submit">
          Login
        </button>
        <button className={styles.containerBtnRegister} onClick={() => navigate('/register')} type="button">
          Registrar
        </button>
      </form>
    </main>
  );
}

export default SignIn;
