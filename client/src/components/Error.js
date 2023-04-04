import React from 'react';

const Error = ({error}) => {
  return(
    <>
        <div role="alert">
  <div className="bg-red-500 text-white font-bold mt-10 text-center text-xl w-full px-4 py-2">
    {error}
  </div>
</div>
    </>
  )
};

export default Error;