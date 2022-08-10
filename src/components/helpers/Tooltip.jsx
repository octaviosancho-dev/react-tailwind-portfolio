import React from 'react';

const Tooltip = ({text}) => {
  return (
    <div className='flex flex-col items-center w-max'>
      <svg className='mx-auto' width="68" height="25" viewBox="0 0 68 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.749512" y="-0.00012207" width="66.263" height="18.0307" rx="6" fill="#3B4070"/>
        <path d="M37.8 14.3063C38.9546 14.3128 39.6692 15.5669 39.0862 16.5636L35.0081 23.5352C34.4251 24.5319 32.9818 24.5236 32.4101 23.5204L28.4116 16.5029C27.84 15.4997 28.5687 14.2538 29.7234 14.2604L37.8 14.3063Z" fill="#3B4070"/>
      </svg>
      <span className='text-[9px] relative -top-[30px] mx-auto w-fit h-0 text-center'>{text}</span>
    </div>
  )
}

export default Tooltip;