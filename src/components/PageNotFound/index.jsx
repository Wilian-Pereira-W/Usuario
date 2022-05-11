import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <main className={styles.container}>
      <h1>404</h1>
      <h3>Page not found</h3>
      <button
        type="button"
        onClick={() => navigate('/')}
      >
        Voltar ao início
      </button>
    </main>
  );
}

export default PageNotFound;
