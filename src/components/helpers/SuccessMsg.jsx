import React from 'react';
import Success from '../svg/Contact/SuccessSvg';

const ErrorMsg = () => {
  return (
    <div className='msgContainer duration-300'>
      <div className='successMsg flex flex-col flex-wrap items-center gap-2'>
        <h5>Message Sent</h5>
        <Success/>
      </div>
    </div>
  );
}

export default ErrorMsg;