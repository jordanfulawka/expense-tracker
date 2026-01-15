'use client';

import { useAuth } from '@/context/AuthContext';
import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistration, setIsRegistration] = useState('');
  const [error, setError] = useState(null);
  const [authenticating, setAuthenticating] = useState(false);
  const { signup, login } = useAuth();

  async function handleAuthenticate() {
    if (!email || !email.includes('@') || password.length < 6) return;
    setError(null);
    setAuthenticating(true);
    try {
      if (isRegistration) {
        await signup(email, password);
      } else {
        await login(email, password);
      }
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    } finally {
      setAuthenticating(false);
    }
  }
  return (
    <div className='login'>
      <h2>{isRegistration ? 'Create an account' : 'Log in'}</h2>
      {error && (
        <div className=''>
          <p>❌ {error}</p>
        </div>
      )}
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email'
        type='email'
      />
      <input
        placeholder='password'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleAuthenticate} disabled={authenticating}>
        {authenticating ? 'Submitting' : 'Submit'}
      </button>
      <div className='full-line' />
      <div>
        <p>
          {isRegistration
            ? 'Already have an account?'
            : "Don't have an account?"}
        </p>
        <button
          onClick={() => {
            setIsRegistration((prev) => !prev);
          }}
        >
          {isRegistration ? 'Log in' : 'Sign up'}
        </button>
      </div>
    </div>
  );
}

export default Login;
