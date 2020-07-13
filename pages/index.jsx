import React from "react";

const index = () => {
  const readMore = () => {
    console.log("reading more");
  };
  const ArticlesList = () => {
    return (
      <div
        className=' bg-gray-100 p shadow-lg border-l-8 border-orange-700 cursor-pointer hover:bg-gray-200'
        onClick={readMore}
      >
        <h1 className='sm:text-2xl font-bold text-gray-800  '>
          docker,kubernetes and skakffold real. [beginner guild]
        </h1>
        <p className='text-xs text-orange-800'>4th of April 2020</p>
        <span className='text-sm'>
          Author: <span className=' italic'>tosin owoeye</span>
        </span>
      </div>
    );
  };

  return (
    <div className='flex flex-col justify-center items-center py-4'>
      <div className=' max-w-5xl w-full px-4 '>
        <h1 className='font-bold text-gray-900'>
          <pre className='text-center text-2xl sm:text-6xl '>
            <code>{`</🖥/>`}</code>
          </pre>
          {/* technologies */}
          <div className='flex justify-between items-center'>
            <div className=' bg-blue-200 rounded p text-blue-800 w-32 text-center border border-blue-800 '>
              devop
            </div>
            <div className=' bg-orange-200 rounded p text-orange-800 w-32 text-center border border-orange-800 '>
              docker
            </div>
            <div className=' bg-purple-200 rounded p text-purple-800 w-32 text-center border border-purple-800'>
              kubernetes
            </div>
            <div className=' bg-red-200 rounded p text-red-800 w-32 text-center border border-red-800'>
              programming
            </div>
          </div>
        </h1>

        <div className='bg-gray-700 text-gray-400 border rounded-lg ' />

        {/* topic list */}
        <div className='flex justify-center items-center'>
       {/*    <img src='./ninja.jpg' alt='nija' className=' w-16 sm:w-16' /> */}
       Tips & Tricks
        </div>
        <h1 className='pb-2 font-bold text-lg sm:text-2xl'>Topics</h1>
        <div className='py-4 leading-loose'>{ArticlesList()}</div>
      </div>
    </div>
  );
};

export default index;
