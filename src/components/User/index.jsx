import React, { useState, useEffect } from 'react';
import api from '../../services/api';

function User() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    const key = JSON.parse(localStorage.getItem('key'));
    api
      .get('users?page=1', {
        headers: {
          Authorization: `bearer ${key}`,
        },
      })
      .then((response) => setUser(response.data.data))
      .catch((err) => {
        console.error(`ops! ocorreu um erro${err}`);
      });
  }, []);

  return (
    <main>
      <h1>Usuários: </h1>
      <table>
        <thead>
          <tr>
            <th>ID </th>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>

  );
}

export default User;
