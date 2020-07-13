import React from "react";

const newArticle = () => {
  const onChange = () => {};

  const onLogin = () => {};
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className=' max-w-2xl w-full'>
         <h1 className="text-2xl font-bold text-gray-900"> Add Article</h1>
        <form>
          <div className='mb-4'>
            <label htmlFor='email' className='text-gray-500 font-bold'>
              Title
            </label>
            <input
              onChange={onChange}
              name='title'
              type='text'
              placeholder='Title'
              className=' focus:bg-white rounded bg-gray-300 shadow-lg border leading-tight focus:outline-none focus:shadow-outline appearance-none'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='text-gray-500 font-bold'>
              Article
            </label>
            <textarea
              name='note'
              cols='30'
              rows='10'
              placeholder="Add some article"
              className='focus:bg-white rounded bg-gray-300 shadow-lg border leading-tight focus:outline-none focus:shadow-outline appearance-none'></textarea>
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='text-gray-500 font-bold'>
              code template
            </label>
            <textarea
              name='code'
              className='focus:bg-white rounded bg-gray-300 shadow-lg border leading-tight focus:outline-none focus:shadow-outline appearance-none'
              cols='30'
              rows='10'
              placeholder="add some code"
            ></textarea>
          </div>
          <input
            onClick={onLogin}
            type='button'
            value='publish'
            className='bg-blue-600 py px w-full text-gray-200 hover:bg-blue-400 rounded'
          />
        </form>
      </div>
    </div>
  );
};

export default newArticle;
