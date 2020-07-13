import React from "react";

const login = () => {
  const onChange = () => {};

  const onLogin = () => {};
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className=' max-w-xs w-full'>
        <div className=' font-bold text-2xl mb-8'>
          <h1>Login</h1>
        </div>
        <form>
          <div className='mb-4'>
            <label htmlFor='email' className='text-gray-500 font-bold'>
              Email
            </label>
            <input
              onChange={onChange}
              name='email'
              type='email'
              placeholder='email'
              className=' focus:bg-white rounded bg-gray-300 shadow-lg border leading-tight focus:outline-none focus:shadow-outline appearance-none'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='text-gray-500 font-bold'>
              Password
            </label>
            <input
              onChange={onChange}
              name='password'
              type='password'
              placeholder='password'
              className='focus:bg-white rounded bg-gray-300 shadow-lg border leading-tight focus:outline-none focus:shadow-outline appearance-none'
            />
          </div>
          <input
            onClick={onLogin}
            type='button'
            value='Login'
            className='bg-blue-600 py px w-full text-gray-200 hover:bg-blue-400 rounded'
          />
        </form>
      </div>
    </div>
  );
};

export default login;
