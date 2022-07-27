import React from 'react';

const Button = ({icon, text, padding, width, height}) => {
  return (
    <button className={`${width} ${height} text-[21px] font-medium bg-purple text-text p-2 ${padding} my-auto mx-auto flex flex-nowrap justify-center items-center gap-2 border-solid border-black border-[3px] rounded-lg btn-shadow duration-200`}>{icon} {text}</button>
  );
}

export default Button;