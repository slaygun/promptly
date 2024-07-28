import React from 'react';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-b-4 border-black"></div>
    </div>
  );
};

export default Spinner;