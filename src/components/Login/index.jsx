import React from 'react';

function Login() {
  return (
    <main>
      <form>
        <label htmlFor="user">
          <input type="text" id="user" name="user" placeholder="Usuário" />
        </label>
        <label htmlFor="lname">
          <input type="text" id="password" name="password" placeholder="Senha" />
          <button type="button">
            <i className="bi bi-eye-slash-fill" />
          </button>
        </label>
        <button type="button">
          Login
        </button>
        <button type="button">
          Registrar
        </button>
      </form>
    </main>
  );
}

export default Login;
