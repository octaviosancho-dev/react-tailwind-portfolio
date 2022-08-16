import React from 'react';
import Error from '../svg/Contact/ErrorSvg';

const ErrorMsg = () => {
  return (
    <div className='msgContainer duration-300'>
      <div className='errorMsg flex flex-col flex-wrap items-center gap-2'>
        <h5>Please, complete all the fields.</h5>
        <Error/>
      </div>
    </div>
  );
}

export default ErrorMsg;