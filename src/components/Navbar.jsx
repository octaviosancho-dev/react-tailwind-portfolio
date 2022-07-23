import React from 'react';
import ContactIcon from './svg/ContactIcon';
import Button from './Button';
import Logo from './svg/Logo';
const Navbar = () => {
  return (
    <header className='bg-body w-10/12 mx-auto h-24 flex flex-row flex-nowrap justify-between'>
      <div className='container w-[155px] my-auto duration-300 logo'>
        <a href="#home"><Logo/></a>
      </div>
      <div className='container w-fit text-[19.5px] my-auto flex flex-row flex-nowrap items-center gap-6'>
        <a href='#home' className='font-medium text-[#979EDB]'>Home</a>
        <a href='#about' className='duration-300 hover:text-light-text'>About me</a>
        <a href='#skills' className='duration-300 hover:text-light-text'>Tech skills</a>
        <a href='#work' className='duration-300 hover:text-light-text'>My work</a>
        <a href='#contact' className='mx-4'><Button icon={<ContactIcon/>} text={'Hire me!'}/></a>
      </div>
    </header>
  );
}

export default Navbar;