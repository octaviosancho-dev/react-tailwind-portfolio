import React, {Fragment, useState} from 'react';

import Button from './Button';
import Logo from './svg/Logo';

import Mail from './svg/Navigation/Mail';
import HamMenu from '../components/svg/Navigation/HamMenu';
import CloseMenu from './svg/Navigation/CloseMenu';
import HomeIcon from './svg/Navigation/HomeIcon';
import AboutIcon from '../components/svg/Navigation/AboutIcon';
import SkillsIcon from './svg/Navigation/SkillsIcon';
import WorkIcon from './svg/Navigation/WorkIcon';
import ContactIcon from './svg/Navigation/ContactIcon';

import LinkedIn from './svg/Social/Linkedin';
import Github from './svg/Social/Github';
import Resume from './svg/Social/Resume';

import { Link } from 'react-scroll';

const Navbar = () => {
  
  const sections = [
    {route: '/home', icon: <HomeIcon/>, name: 'Home'},
    {route: '/about', icon: <AboutIcon/>, name: 'About me'},
    {route: '/skills', icon: <SkillsIcon/>, name: 'Skills'},
    {route: '/work', icon: <WorkIcon/>, name: 'My Work'},
    {route: '/contact', icon: <ContactIcon/>, name: 'Contact me'},
  ];

  const [active, setActive] = useState(0);
  const [menu, setMenu] = useState(false);

  const scrollBar = document.body;

  if(menu) {
    scrollBar.classList.add('no-scroll')
  } else {
    scrollBar.classList.remove('no-scroll')
  }

  return (
    <Fragment>
      <header className='sticky bg-body w-full border-b border-b-[#2C2D37] top-0 z-20 md:relative md:w-10/12 md:bg-transparent mx-auto h-24 flex flex-row flex-nowrap justify-between px-8 lg:px-12'>
        <div className='w-[137px] my-auto duration-300 logo cursor-pointer z-10'>
          <Link to='/'><Logo/></Link>
        </div>
        <div className='hidden md:flex flex-row flex-nowrap items-center gap-6 container w-fit text-base my-auto z-20 lg:text-[19px]'>
          <Link to='/home' className='font-medium text-[#979EDB] cursor-pointer'>Home</Link>
          <Link to='/about' className='duration-300 hover:text-light-text cursor-pointer'>About me</Link>
          <Link to='/skills' className='duration-300 hover:text-light-text cursor-pointer'>Tech skills</Link>
          <Link to='/work' className='duration-300 hover:text-light-text cursor-pointer'>My work</Link>
          <Link to='/contact' className='md:hidden laptop:block mx-5 z-20'><Button icon={<Mail/>} text={'Hire me!'} width={'w-[140px]'} height={'h-[45px]'}/></Link>
        </div>
        <div className='hidden md:block my-auto z-20 laptop:hidden'>
          <Button icon={<Mail/>} width={'w-[45px]'} height={'h-[45px]'}/>
        </div>
        <div className='z-50 w-max my-auto md:hidden' onClick={ () => setMenu(!menu) }>
          <Button icon={ menu ? <CloseMenu/> : <HamMenu/> } padding={'p-2'} width={'fit'}/>
        </div>
        <div className={`z-10 bg-[#2D2F45] w-[70vw] h-full duration-500 fixed top-0 ${menu ? 'left-0' : ' left-[-100vw]' } md:hidden `}>
          <div className='w-[137px] z- my-auto relative top-8 left-14 cursor-pointer'>
            <Link to='/' onClick={ () => setMenu(!menu) }><Logo/></Link>
          </div>
          <div className='flex flex-col items-start gap-6 relative top-20 w-100% text-lg my-auto pl-7'>
            <Link to='/home' className='font-medium text-[#979EDB] cursor-pointer' onClick={ () => setMenu(!menu) }>Home</Link>
            <Link to='/about' className='duration-300 hover:text-light-text cursor-pointer' onClick={ () => setMenu(!menu) }>About me</Link>
            <Link to='/skills' className='duration-300 hover:text-light-text cursor-pointer' onClick={ () => setMenu(!menu) }>Tech skills</Link>
            <Link to='/work' className='duration-300 hover:text-light-text cursor-pointer' onClick={ () => setMenu(!menu) }>My work</Link>
            <Link to='/contact' className='my-5' onClick={ () => setMenu(!menu) }><Button icon={<Mail/>} text={'Hire me!'} width={'w-[140px]'} height={'h-[45px]'}/></Link>
          </div>
          <div className='flex flex-row justify-center gap-9 relative top-32'>
            <a href='https://www.linkedin.com/in/octaviosancho-dev/' target='_blank' rel='noreferrer'><LinkedIn width={'31'}/></a>
            <a href='https://github.com/octaviosancho-dev' target='_blank' rel='noreferrer'><Github width={'31'}/></a>
            <a href='https://drive.google.com/file/d/1vuzu-KvwytBEqQARhJV592ETWhoAljQv/view?usp=sharing' target='_blank' rel='noreferrer'><Resume width={'37'}/></a>
          </div>
        </div>
      </header>

      <nav className='hidden laptop:flex flex-col justify-between items-start fixed top-60 w-12 h-max pl-20 gap-14'>
        {sections.map( (section, index) => {
          const {route, icon, name} = section;

          return(
            <Link
            onClick={ () => setActive(index) }
            to={route}
            key={index}
            className='flex flex-row items-center gap-6 nav-tooltip cursor-pointer'
            >
              <div className={ active === index ? 'selected-dot' : '' }>{icon}</div>
              <span className='relative bg-gray-900 rounded-md p-2 py-1 whitespace-nowrap duration-200 opacity-0 z-50'>{name}</span>
            </Link>
          );
        })}        
      </nav>
    </Fragment>
  );
}

export default Navbar;