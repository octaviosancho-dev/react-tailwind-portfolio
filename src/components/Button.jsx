import React from 'react';

const Button = ({icon, text, padding, width, height, rounded, fontSize, fontWeight, borderBackground}) => {
  return (
    <button className={`z-50 ${width} ${height} text-[21px] ${fontSize} font-medium ${fontWeight} bg-purple text-text p-2 ${padding} my-auto mx-auto flex flex-nowrap justify-center items-center gap-2 border-solid border-black border-[3px] rounded-lg ${rounded} btn-shadow ${borderBackground} duration-200`}>{icon} {text}</button>
  );
}

export default Button;