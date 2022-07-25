import React from 'react';
import LinkedIn from './svg/Social/Linkedin';
import Github from './svg/Social/Github';
import Resume from './svg/Social/Resume';

const Hero = () => {
  return (
    <div className='mx-auto'>
      <div className='ml-[20vw] w-fit relative top-[20vh]'>
        <h2 className='text-text text-4xl font-normal mb-4'>Hello there! I am Octavio,</h2> <br/>
        <h1 className='text-title text-7xl font-medium mb-3'>Front-End Developer</h1> <br/>
        <h3 className='text-[#D7D7D7] text-xl font-light'>Software Developer | Programmer | Web Designer</h3>
        <div className='flex flex-row justify-start items-center gap-14 mt-20'>
          <a href='https://www.linkedin.com/in/octaviosancho-dev/' target='_blank' rel='noreferrer' className='logo duration-200'><LinkedIn width={'45'}/></a>
          <a href='https://github.com/octaviosancho-dev' target='_blank' rel='noreferrer' className='logo duration-200'><Github width={'45'}/></a>
          <a href='https://drive.google.com/file/d/1vuzu-KvwytBEqQARhJV592ETWhoAljQv/view?usp=sharing' target='_blank' rel='noreferrer' className='logo duration-200'><Resume width={'50'}/></a>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Hero;