import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { FormattedMessage } from 'react-intl';

import Button from './helpers/Button';
import Illustration from './svg/Skills/Illustration';
import Tooltip from './helpers/Tooltip';

import JavaScriptSVG from './svg/Skills/JavaScriptSVG';
import ReactSVG from './svg/Skills/ReactSVG';
import NodeSVG from './svg/Skills/NodeSVG';
import FigmaSVG from './svg/Skills/FigmaSVG';
import OopSVG from './svg/Skills/OopSVG';
import JquerySVG from './svg/Skills/JquerySVG';
import JsonSVG from './svg/Skills/JsonSVG';
import SassSVG from './svg/Skills/SassSVG';
import GitSVG from './svg/Skills/GitSVG';
import CssSVG from './svg/Skills/CssSVG';
import HtmlSVG from './svg/Skills/HtmlSVG';
import BootstrapSVG from './svg/Skills/BootstrapSVG';
import FirebaseSVG from './svg/Skills/FirebaseSVG';
import TailwindSVG from './svg/Skills/TailwindSVG';
import CsharpSVG from './svg/Skills/CsharpSVG';
import DotNetSVG from './svg/Skills/DotNetSVG';
import SqlSVG from './svg/Skills/SqlSVG';

const Skills = () => {

  const filters = [
    {text: <FormattedMessage id='filter-all' defaultMessage='All'/>, filter: undefined}, 
    {text: <FormattedMessage id='filter-programming' defaultMessage='Programming'/>, filter: 'programming'},
    {text: 'Front-End', filter: 'front'},
    {text: 'Back-End', filter: 'back'},
    {text: <FormattedMessage id='filter-libraries' defaultMessage='Frameworks/Libraries'/>, filter: 'library'},
    {text: <FormattedMessage id='filter-design' defaultMessage='Design'/>, filter: 'design'},
    {text: <FormattedMessage id='filter-database' defaultMessage='Database'/>, filter: 'database'}
  ];

  

  const [selected, setSelected] = useState(undefined);

  const setFilters = (filter) => {
    setSelected(filter);
  }

  const [skillGroup, setSkillGroup] = useState([]);

  useEffect( () => {

    const skills = [
      {icon: <JavaScriptSVG/>, name: 'JavaScript', level: <FormattedMessage id='tooltip-advanced' defaultMessage='Advanced'/>, type: ['front', 'programming']},
      {icon: <ReactSVG/>, name: 'React JS', level: <FormattedMessage id='tooltip-advanced' defaultMessage='Advanced'/>, type: ['front', 'library', 'programming']},
      {icon: <NodeSVG/>, name: 'Node JS', level: <FormattedMessage id='tooltip-basic' defaultMessage='Basic'/>, type: ['back', 'programming']},
      {icon: <FigmaSVG/>, name: 'Figma', level: <FormattedMessage id='tooltip-intermediate' defaultMessage='Intermediate'/>, type: ['design']},
      {icon: <OopSVG/>, name: 'OOP', level: <FormattedMessage id='tooltip-intermediate' defaultMessage='Intermediate'/>, type: ['front', 'back', 'programming']},
      {icon: <JquerySVG/>, name: 'jQuery', level: <FormattedMessage id='tooltip-basic' defaultMessage='Basic'/>, type: ['library', 'programming']},
      {icon: <JsonSVG/>, name: 'JSON', level: <FormattedMessage id='tooltip-intermediate' defaultMessage='Intermediate'/>, type: ['programming']},
      {icon: <SassSVG/>, name: 'Sass', level: <FormattedMessage id='tooltip-intermediate' defaultMessage='Intermediate'/>, type: ['front']},
      {icon: <GitSVG/>, name: 'Git', level: <FormattedMessage id='tooltip-advanced' defaultMessage='Advanced'/>, type: ['programming']},
      {icon: <CssSVG/>, name: 'CSS3', level: <FormattedMessage id='tooltip-advanced' defaultMessage='Advanced'/>, type: ['front']},
      {icon: <HtmlSVG/>, name: 'HTML5', level: <FormattedMessage id='tooltip-advanced' defaultMessage='Advanced'/>, type: ['front']},
      {icon: <BootstrapSVG/>, name: 'Bootstrap', level: <FormattedMessage id='tooltip-intermediate' defaultMessage='Intermediate'/>, type: ['front', 'library']},
      {icon: <FirebaseSVG/>, name: 'Firebase', level: <FormattedMessage id='tooltip-intermediate' defaultMessage='Intermediate'/>, type: ['programming', 'database']},
      {icon: <TailwindSVG/>, name: 'Tailwind.css', level: <FormattedMessage id='tooltip-advanced' defaultMessage='Advanced'/>, type: ['front', 'library']},
      {icon: <CsharpSVG/>, name: 'C#', level: <FormattedMessage id='tooltip-intermediate' defaultMessage='Intermediate'/>, type: ['programming', 'back']},
      {icon: <DotNetSVG/>, name: '.NET', level: <FormattedMessage id='tooltip-intermediate' defaultMessage='Intermediate'/>, type: ['programming', 'back', 'library']},
      {icon: <SqlSVG/>, name: 'SQL', level: <FormattedMessage id='tooltip-intermediate' defaultMessage='Intermediate'/>, type: ['database']}
    ];

    let filteredArray = [];

    [...skills].forEach( skill => {
      const {icon, name, level, type} = skill;
      
      if(type.find( (element) => element === selected) === selected) {
        filteredArray.push({icon, name, level});
      }
    })

    setSkillGroup(filteredArray);
  }, [selected])


  return (
    <>
      <div id='skills' className='flex-wrap w-3/4 sm:mx-auto mx-auto lg:flex-nowrap flex flex-row justify-between gap-10 lg:w-3/4'>
        <div className='w-full text-gray-300'>
          <h2 className='w-2/3 mb-6 md:text-2xl lg:text-3xl font-bold text-text md:mb-6 lg:mb-12 section-title'><FormattedMessage id='skills-title' defaultMessage='Tech Skills'/></h2>
          <div className='flex flex-wrap w-full gap-x-2 laptop:w-3/4 laptop:flex-nowrap flex-row justify-center mx-auto z-50 text-text md:gap-x-6 gap-y-4'>

            {filters.map( (option, index) => {
              const {text, filter} = option;
              return (
              <span onClick={ () => setFilters(filter) } className={`max-h-[75px] ${filter === selected ? 'selected-filter z-50' : null }`}>
                <Button key={index} text={text} fontSize={'!text-[8px] md:!text-[12px]'} fontWeight={'font-normal'} rounded={'!rounded-full'} width={'w-max'} padding={'px-2 sm:px-4'} height={'h-[20px] md:h-[30px]'} borderBackground={'!bg-transparent !border-[#4956D2]'}/>
              </span>)
            } )}

          </div>
          <div className='w-11/12 sm:w-[85%] mx-auto flex flex-row justify-center my-12 lg:justify-between items-center'>
            <div className='min-w-full min-h-fit sm:min-h-[610px] sm:max-h-[720px] bg-[#24252B] rounded-lg justify-center flex flex-row flex-wrap sm:justify-start items-start content-start gap-8 p-8 z-10 lg:w-1/2 lg:min-w-min'>
            <AnimatePresence>
              { skillGroup.map( (skill, index) => {
                const {icon, name, level} = skill;

                  return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} key={index} className='w-[35px] h-[65px] cursor-pointer md:w-fit md:h-fit flex flex-col items-center mt-5 nav-tooltip'>
                      <div className='relative -top-10 -left-[33px] w-0 h-0 mx-auto opacity-0 duration-200'>
                        <Tooltip text={level}/>
                      </div>
                      {icon}
                      <h4 className='text-[10px] mt-2 whitespace-nowrap md:text-xs md:mt-3'>{name}</h4>
                    </motion.div>
                  )
              }) }
            </AnimatePresence>  
            </div>
            <div className='hidden lg:block'>
              <Illustration/>
            </div>
          </div>
        </div>
      </div>
      <div className='relative top-20 lg:top-20 w-1/3 h-1 mx-auto bg-[#242636] rounded-sm'></div>
    </>
  )
}

export default Skills