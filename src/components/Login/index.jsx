import React, { useState } from 'react';

function Login() {
  const [showPassword, setShowPassword] = useState(true);

  const handleShowPassword = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };
  return (
    <main>
      <form>
        <label htmlFor="user">
          <input type="text" id="user" name="user" placeholder="Usuário" />
        </label>
        <label htmlFor="lname">
          <input type={showPassword ? 'password' : 'text'} id="password" name="password" placeholder="Senha" />
          <button type="button" onClick={() => handleShowPassword()}>
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
