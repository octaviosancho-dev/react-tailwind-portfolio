import React from 'react';

const Button = ({submit, icon, text, padding, width, height, rounded, fontSize, fontWeight, borderBackground, bgColor, disable}) => {
  return (
    <button disabled={disable} type={`${submit}`} className={`z-50 ${width} ${height} text-[21px] ${fontSize} font-medium ${fontWeight} bg-purple ${bgColor} text-text p-2 ${padding} my-auto mx-auto flex flex-nowrap justify-center items-center gap-2 border-solid border-black border-[3px] rounded-lg ${rounded} ${!disable && 'btn-shadow'} ${borderBackground} duration-200 ${disable && 'bg-gray-500 text-gray-400 border-gray-500 shadow-slate-400'}`}>{icon} {text}</button>
  );
}

export default Button;