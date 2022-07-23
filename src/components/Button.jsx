import React from 'react';

const Button = ({icon, text}) => {
  return (
    <button className='w-max h-11 text-[21px] font-normal bg-purple text-white p-2 flex flex-nowrap items-center gap-2 border-solid border-black border-[3px] rounded-lg btn-shadow duration-200'>{icon} {text}</button>
  );
}

export default Button;