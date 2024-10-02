import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { FormattedMessage } from 'react-intl';

import Button from './helpers/Button';
import Illustration from './svg/Skills/Illustration';
import Tooltip from './helpers/Tooltip';

import JavaScriptSVG from './svg/Skills/JavaScriptSVG';
import ReactSVG from './svg/Skills/ReactSVG';
import NodeSVG from './svg/Skills/NodeSVG';
import GitSVG from './svg/Skills/GitSVG';
import CssSVG from './svg/Skills/CssSVG';
import HtmlSVG from './svg/Skills/HtmlSVG';
import TailwindSVG from './svg/Skills/TailwindSVG';
import CsharpSVG from './svg/Skills/CsharpSVG';
import DotNetSVG from './svg/Skills/DotNetSVG';
import SqlServer from './svg/Skills/SqlServer';
import TypeScriptSVG from './svg/Skills/TypeScriptSVG';
import AzureSVG from './svg/Skills/AzureSVG';
import PostgreSVG from './svg/Skills/PostgreSVG';
import MongoSVG from './svg/Skills/MongoSVG';
import ReduxSVG from './svg/Skills/ReduxSVG';
import DockerSVG from './svg/Skills/DockerSVG';
import RabbitMQSVG from './svg/Skills/RabbitMQSVG';
import NextSVG from './svg/Skills/NextSVG';
import PrismaSVG from './svg/Skills/PrismaSVG';

const Skills = () => {

  const filters = [
    {text: <FormattedMessage id='filter-all' defaultMessage='All'/>, filter: undefined}, 
    {text: 'Front-End', filter: 'front'},
    {text: 'Back-End', filter: 'back'},
    {text: <FormattedMessage id='filter-libraries' defaultMessage='Frameworks/Libraries'/>, filter: 'library'},
    {text: <FormattedMessage id='filter-devops' defaultMessage='DevOps'/>, filter: 'devops'},
    {text: <FormattedMessage id='filter-database' defaultMessage='Database'/>, filter: 'database'}
  ];

  

  const [selected, setSelected] = useState(undefined);

  const setFilters = (filter) => {
    setSelected(filter);
  }

  const [skillGroup, setSkillGroup] = useState([]);

  useEffect( () => {

    const skills = [
      {icon: <DotNetSVG/>, name: '.NET', level: <FormattedMessage id='tooltip-advanced' defaultMessage='Advanced'/>, type: ['programming', 'back', 'library']},
      {icon: <CsharpSVG/>, name: 'C#', level: <FormattedMessage id='tooltip-advanced' defaultMessage='Advanced'/>, type: ['programming', 'back']},
      {icon: <ReactSVG/>, name: 'React JS', level: <FormattedMessage id='tooltip-advanced' defaultMessage='Advanced'/>, type: ['front', 'library', 'programming']},
      {icon: <ReduxSVG/>, name: 'Redux', level: <FormattedMessage id='tooltip-intermediate' defaultMessage='Intermediate'/>, type: ['front', 'library', 'programming']},
      {icon: <TypeScriptSVG/>, name: 'TypeScript', level: <FormattedMessage id='tooltip-advanced' defaultMessage='Advanced'/>, type: ['programming']},
      {icon: <JavaScriptSVG/>, name: 'JavaScript', level: <FormattedMessage id='tooltip-advanced' defaultMessage='Advanced'/>, type: ['front', 'programming']},
      {icon: <SqlServer/>, name: 'SQL Server', level: <FormattedMessage id='tooltip-advanced' defaultMessage='Advanced'/>, type: ['database']},
      {icon: <PostgreSVG/>, name: 'PostgreSQL', level: <FormattedMessage id='tooltip-intermediate' defaultMessage='Intermediate'/>, type: ['database']},
      {icon: <AzureSVG/>, name: 'Azure', level: <FormattedMessage id='tooltip-intermediate' defaultMessage='Intermediate'/>, type: ['devops', 'database', 'programming']},
      {icon: <MongoSVG/>, name: 'MongoDB', level: <FormattedMessage id='tooltip-intermediate' defaultMessage='Intermediate'/>, type: ['database']},
      {icon: <DockerSVG/>, name: 'Docker', level: <FormattedMessage id='tooltip-intermediate' defaultMessage='Intermediate'/>, type: ['devops']},
      {icon: <RabbitMQSVG/>, name: 'RabbitMQ', level: <FormattedMessage id='tooltip-intermediate' defaultMessage='Intermediate'/>, type: ['back', 'programming']},
      {icon: <GitSVG/>, name: 'Git', level: <FormattedMessage id='tooltip-advanced' defaultMessage='Advanced'/>, type: ['programming']},
      {icon: <NextSVG/>, name: 'Next JS', level: <FormattedMessage id='tooltip-intermediate' defaultMessage='Intermediate'/>, type: ['front', 'programming']},
      {icon: <PrismaSVG/>, name: 'Prisma ORM', level: <FormattedMessage id='tooltip-intermediate' defaultMessage='Intermediate'/>, type: ['programming', 'library']},
      {icon: <CssSVG/>, name: 'CSS3', level: <FormattedMessage id='tooltip-advanced' defaultMessage='Advanced'/>, type: ['front']},
      {icon: <HtmlSVG/>, name: 'HTML5', level: <FormattedMessage id='tooltip-advanced' defaultMessage='Advanced'/>, type: ['front']},
      {icon: <TailwindSVG/>, name: 'Tailwind', level: <FormattedMessage id='tooltip-advanced' defaultMessage='Advanced'/>, type: ['front', 'library']}
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
          <h2 className='w-2/3 mb-6 md:text-2xl lg:text-3xl font-bold text-text md:mb-6 lg:mb-12 section-title'><FormattedMessage id='skills-title' defaultMessage='Skills'/></h2>
          <div className='flex flex-wrap w-full gap-x-2 laptop:w-3/4 laptop:flex-nowrap flex-row justify-center mx-auto z-50 text-text md:gap-x-6 gap-y-4'>

            {filters.map( (option, index) => {
              const {text, filter} = option;
              return (
              <span key={index} onClick={ () => setFilters(filter) } className={`max-h-[75px] ${filter === selected ? 'selected-filter z-50' : null }`}>
                <Button text={text} fontSize={'!text-[8px] md:!text-[12px]'} fontWeight={'font-normal'} rounded={'!rounded-full'} width={'w-max'} padding={'px-2 sm:px-4'} height={'h-[20px] md:h-[30px]'} borderBackground={'!bg-transparent !border-[#4956D2]'}/>
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