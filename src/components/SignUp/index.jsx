import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import api from '../../services/api';

function SignUp() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(true);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleShowPassword = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailFormat = /\S+@\S+\.\S+/;
    const isValid = emailFormat.test(user);
    if (isValid) {
      const data = {
        email: user,
        password,
        name,
      };
      api.post('authaccount/registration', data)
        .then(() => {
          setUser('');
          setPassword('');
          setName('');
          navigate('/');
        })
        .catch((error) => {
          setUser('');
          setPassword('');
          setName('');
          // eslint-disable-next-line no-console
          console.log(error);
        });
    } else {
      alert('Formato do usuário inválido! Exemplo valido: teste.teste@teste.com');
    }
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
        <label htmlFor="name">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nome"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <button className={styles.containerBtnRegister} type="submit">
          Registrar
        </button>
      </form>
    </main>
  );
}

export default SignUp;
