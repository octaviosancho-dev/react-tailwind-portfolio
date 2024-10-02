import React, { useEffect } from 'react';
import LinkedIn from './svg/Social/Linkedin';
import Github from './svg/Social/Github';
import Resume from './svg/Social/Resume';
import Arrow from './svg/Navigation/Arrow';

import { FormattedMessage } from 'react-intl';

const Hero = () => {

  useEffect( () => {
    setTimeout(() => {
      const arrow = document.querySelector('.arrow');
      arrow.classList.remove('opacity-0');
    }, 3000);
  },[])

  return (
    <div>
      <h2> </h2>
      <div id='hero' className='flex flex-col justify-center'>
        <div className='mx-auto flex flex-row flex-nowrap justify-center items-center'>
          <div className='w-fit relative top-[20vh]'>
            <h3 className='text-lg md:text-2xl lg:text-4xl text-text text-center font-normal mb-4'>
            <FormattedMessage id='hero-paragraph' defaultMessage='Hello there! I am Octavio,'/>
            </h3> <br/>
            <h1 className='text-4xl md:text-6xl text-title text-center font-medium mb-3 lg:text-7xl'>
            <FormattedMessage id='hero-title' defaultMessage='.NET & React Developer'/>
            </h1> <br/>
            <div className='flex flex-row justify-center items-center gap-14 mt-10 w-min h-min mx-auto'>
              <a href='https://www.linkedin.com/in/octaviosancho-dev/' target='_blank' rel='noreferrer' className='logo duration-200'><LinkedIn width={'45'}/></a>
              <a href='https://github.com/octaviosancho-dev' target='_blank' rel='noreferrer' className='logo duration-200'><Github width={'45'}/></a>
              <a href='https://drive.google.com/file/d/1UZmdSBW8sPlK6KdiP3IKrBsqoqZmqEJG/view?usp=drive_link' target='_blank' rel='noreferrer' className='logo duration-200'><Resume width={'45'}/></a>
            </div>
          </div>
        </div>
        <div className='w-3/6 mx-auto relative top-[30vh] flex justify-center arrow duration-700 opacity-0'>
          <Arrow/>
        </div>
      </div>
    </div>
  );
}

export default Hero;