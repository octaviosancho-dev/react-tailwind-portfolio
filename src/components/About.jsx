import React from 'react';
import ProfilePic from '../assets/img/about-image.png';
import Button from './helpers/Button';
import Mail from './svg/Navigation/Mail';

import { HashLink as Link } from 'react-router-hash-link';

import { FormattedMessage } from 'react-intl';

const About = () => {
  return (
    <div className='mb-48'>
      <div id='about' className='flex-wrap w-3/4 mt-96 sm:mx-auto sm:mt-[500px] sm:w-4/6 mx-auto lg:flex-nowrap flex flex-row justify-between gap-10 lg:w-3/4'>
        <div className='w-full lg:w-4/5 text-gray-300'>
          <h2 className='w w-3/4 mb-12 md:text-2xl lg:text-3xl font-bold text-text md:mb-24 section-title'><FormattedMessage id='about-title' defaultMessage='About me'/></h2>
          <div className='ml-0 sm:ml-10 md:ml-20'>
            <p className='mb-5 text-xs md:text-sm lg:text-lg'><FormattedMessage id='about-first-paragraph' defaultMessage='Hi! My name is Octavio Sancho, I am a 25 years old Software and Web Developer based in Buenos Aires, Argentina.'/></p>
            <p className='mb-5 text-xs md:text-sm lg:text-lg'><FormattedMessage id='about-second-paragraph' defaultMessage='Currently I am working as .NET Developer at Reportv S.A. and developing self web projects. I have 1 year of experience creating Websites and developing Software Applications, I always keep myself learning new Skills. I usually work with ReactJS, JavaScript, Tailwind.css, Sass, and other technologies.", "about-third-paragraph": "I truly believe that my strong points lies in development and research , but also I really love designing the applications I create. Currently, I am looking for my first IT experience in a company and focusing on dominate Back-End Technologies. I want to scale up my skills and grow as professional.'/></p>
            <p className='mb-5 text-xs md:text-sm lg:text-lg'><FormattedMessage id='about-third-paragraph' defaultMessage='I truly believe that my strong points lies in development and research , but also I really love designing the applications I create. Currently, I am looking for my first IT experience in a company and focusing on dominate Back-End Technologies. I want to scale up my skills and grow as professional.'/></p>
          </div>
        </div>
        <div className='mx-auto w-52 md:w-72 laptop:w-auto laptop:mx-auto lg:ml-0'>
          <img src={ProfilePic} alt='about-pic' className='w-80 lg:w-[550px] relative -top-8 -z-10'/>
        </div>
      </div>
      <div className='top-6 lg:-top-16 w-full z-10 relative '>
        <Link smooth to='#contact' className='md:hidden laptop:block mx-5 z-20'><Button text={<FormattedMessage id='contact-title' defaultMessage='Get in Touch'/>} icon={<Mail/>} height={'h-12'}/></Link>
      </div>
      <div className='relative top-20 lg:top-0 w-1/3 h-1 mx-auto bg-[#242636] rounded-sm'></div>
    </div>
  )
}

export default About;