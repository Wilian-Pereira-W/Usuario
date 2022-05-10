import React, { useState, useEffect } from 'react';
import api from '../services/api';

function Users() {
  const [users, setUser] = useState();

  useEffect(() => {
    const key = JSON.parse(localStorage.getItem('key'));
    api
      .get('users', {
        headers: {
          Authorization: `bearer ${key}`,
        },
      })
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error(`ops! ocorreu um erro${err}`);
      });
  }, []);

  return (
    <div>
      <h1>User</h1>
    </div>
  );
}

export default Users;
