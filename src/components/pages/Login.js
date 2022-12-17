import React, { useState } from 'react';

const Login = () => {
  const [userid, setUserid] = useState('');
  const [pwd, setPwd] = useState('');

  const handleLogin = () => {
    // var greet = document.createElement('h3');
    // greet.innerText = `Welcome ${userid}`;
    document.getElementById('show').innerText = `Welcome ${userid}`;
  };

  return (
    <div>
      <form action=''>
        <div className='mb3'>
          <label htmlFor='userid' className='form-label'>
            User id
          </label>
          <input
            type='text'
            className='form-control'
            id='userid'
            onChange={(e) => {
              setUserid(e.target.value);
            }}
          ></input>
        </div>
        <div className='mb-3'>
          <label htmlFor='pwd' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-control'
            id='pwd'
            onChange={(e) => {
              setPwd(e.target.value);
            }}
          ></input>
        </div>
        <button
          type='button'
          className='btn btn-primary'
          onClick={() => {
            handleLogin();
          }}
        >
          Login
        </button>
        <div id='show'></div>
      </form>
    </div>
  );
};

export default Login;
