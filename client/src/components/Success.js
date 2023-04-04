import React from 'react';

const Success = ({success}) => {
  return(
    <>
        <div role="alert">
  <div className="bg-green-500 text-white font-bold mt-10 text-center text-xl w-full px-4 py-2">
    {success}
  </div>
</div>
    </>
  )
};

export default Success;