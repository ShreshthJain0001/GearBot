import React, { useState, useEffect } from 'react';
import './CSS/SignInRegister.css'

const SignInRegister = ({ onLoginSuccess }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(savedUsers);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleRegister = () => {
    if (credentials.username && credentials.password) {
      const userExists = users.find((user) => user.username === credentials.username);
      if (userExists) {
        alert('Username already exists!');
      } else {
        const updatedUsers = [...users, credentials];
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        alert('Registration successful!');
        setIsRegistering(false);
        setCredentials({ username: '', password: '' });
      }
    } else {
      alert('Please fill in all fields!');
    }
  };

  const handleLogin = () => {
    const user = users.find(
      (user) => user.username === credentials.username && user.password === credentials.password
    );
    if (user) {
      localStorage.setItem('isAuthenticated', true);
      onLoginSuccess();
    } else {
      alert('Invalid username or password!');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isRegistering ? 'Register' : 'Login'}</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleInputChange}
        />
        {isRegistering ? (
          <>
            <button id='register'
              onClick={handleRegister}
            >
              Register
            </button>
            <p>
              Already have an account?{' '}
              <span id='loginhere'
                onClick={() => setIsRegistering(false)}
              >
                Login here
              </span>
            </p>
          </>
        ) : (
          <>
            <button id='login'
              onClick={handleLogin}
            >
              Login
            </button>
            <p>
              Don’t have an account?{' '}
              <span id='registerhere'
                onClick={() => setIsRegistering(true)}
              >
                Register here
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default SignInRegister;