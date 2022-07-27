import React from 'react';
import ProfilePic from '../assets/img/about-image.png';
import Button from './Button';
import Mail from './svg/Navigation/Mail';

const About = () => {
  return (
    <>
      <div className='flex-wrap w-3/4 mt-96 sm:mx-auto sm:mt-[500px] sm:w-4/6 mx-auto lg:flex-nowrap flex flex-row justify-between gap-10 lg:w-3/4'>
        <div className='w-full lg:w-4/5 text-gray-300'>
          <h2 className='mb-12 md:text-2xl lg:text-3xl font-bold text-text md:mb-24 section-title'>About me</h2>
          <div className='ml-0 sm:ml-10 md:ml-20'>
            <p className='mb-5 text-xs md:text-sm lg:text-lg'>Hi! My name is <span>Octavio Sancho</span>, I am a 25 years old <span>Software and Web Developer</span> from Buenos Aires, Argentina.</p>
            <p className='mb-5 text-xs md:text-sm lg:text-lg'>I have 1 year of experience creating <span>Websites</span> and developing <span>Software Applications</span>, I always keep myself learning new Skills. I usually work with ReactJS, JavaScript, Tailwind.css, Sass, and other technologies.</p>
            <p className='mb-5 text-xs md:text-sm lg:text-lg'>I truly believe that <span>my strong points lies in development and research</span> , but also I really love designing the applications I create. Currently, I am looking for my first IT experience in a company, I want to scale up my skills and grow as professional.</p>
          </div>
        </div>
        <div className='mx-auto w-52 md:w-72 laptop:w-auto laptop:mx-auto lg:ml-0'>
          <img src={ProfilePic} alt='about-pic' className='w-80 lg:w-[550px] relative -top-8 -z-10'/>
        </div>
      </div>
      <div className='top-6 lg:-top-16 w-full z-20 relative '>
        <Button text={'Get in touch'} icon={<Mail/>} height={'h-12'}/>
      </div>
      <div className='relative top-20 lg:top-0 w-1/3 h-1 mx-auto bg-[#242636] rounded-sm'></div>
    </>
  )
}

export default About;