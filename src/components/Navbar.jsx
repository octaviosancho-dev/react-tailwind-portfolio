import React, {Fragment, useState} from 'react';
import Mail from './svg/Mail';
import Button from './Button';
import Logo from './svg/Logo';
import HamMenu from '../components/svg/HamMenu';
import HomeIcon from './svg/HomeIcon';
import AboutIcon from '../components/svg/AboutIcon';
import SkillsIcon from './svg/SkillsIcon';
import WorkIcon from './svg/WorkIcon';
import ContactIcon from './svg/ContactIcon';
const Navbar = () => {
  
  const sections = [
    {href: '#home', icon: <HomeIcon/>, name: 'Home'},
    {href: '#about', icon: <AboutIcon/>, name: 'About me'},
    {href: '#skills', icon: <SkillsIcon/>, name: 'Skills'},
    {href: '#work', icon: <WorkIcon/>, name: 'My Work'},
    {href: '#contact', icon: <ContactIcon/>, name: 'Contact me'},
  ];

  const [active, setActive] = useState(0);

  

  return (
    <Fragment>
      <header className='bg-body w-10/12 mx-auto h-24 flex flex-row flex-nowrap justify-between px-8 lg:px-12'>
        <div className='w-[137px] my-auto duration-300 logo'>
          <a href="#home"><Logo/></a>
        </div>
        <div className='hidden md:flex flex-row flex-nowrap items-center gap-6 container w-fit text-[19px] my-auto'>
          <a href='#home' className='font-medium text-[#979EDB]'>Home</a>
          <a href='#about' className='duration-300 hover:text-light-text'>About me</a>
          <a href='#skills' className='duration-300 hover:text-light-text'>Tech skills</a>
          <a href='#work' className='duration-300 hover:text-light-text'>My work</a>
          <a href='#contact' className='md:hidden lg:block mx-5'><Button icon={<Mail/>} text={'Hire me!'} width={'w-[140px]'} height={'h-[45px]'}/></a>
        </div>
        <div className='hidden md:block my-auto lg:hidden'>
          <Button icon={<Mail/>} width={'w-[45px]'} height={'h-[45px]'}/>
        </div>
        <div className='w-max my-auto md:hidden'>
          <Button icon={<HamMenu/>} padding={'p-2'} width={'fit'}/>
        </div>
      </header>

      
        <nav className='hidden lg:flex flex-col justify-between items-start fixed top-60 w-12 h-max pl-20 gap-14'>
          {sections.map( (section, index) => {
            const {href, icon, name} = section;

            return(
              <a
              onClick={ () => setActive(index) }
              href={href}
              key={index}
              className='flex flex-row items-center gap-6 nav-tooltip'
              >
                <div className={ active === index ? 'selected-dot' : '' }>{icon}</div>
                <span className='relative bg-gray-900 rounded-md p-2 py-1 whitespace-nowrap duration-200 opacity-0'>{name}</span>
              </a>
            );
          })}        
        </nav>
      
    </Fragment>
  );
}

export default Navbar;