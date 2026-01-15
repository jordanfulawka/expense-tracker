'use client';

import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistration, setIsRegistration] = useState('');
  return (
    <div className='login'>
      <h2>{isRegistration ? 'Create an account' : 'Log in'}</h2>
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
      <button>Submit</button>
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
