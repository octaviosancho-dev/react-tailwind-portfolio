import React, { useState } from 'react';

import Button from './Button';
import Illustration from './svg/Skills/Illustration';
import Tooltip from './Tooltip';

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
    {text: 'All', filter: null}, 
    {text: 'Programming', filter: 'programming'},
    {text: 'Front-End', filter: 'front'},
    {text: 'Back-End', filter: 'back'},
    {text: 'Frameworks/Libraries', filter: 'library'},
    {text: 'Design', filter: 'design'},
    {text: 'Database', filter: 'database'}
  ];

  const skills = [
    {icon: <JavaScriptSVG/>, name: 'JavaScript', level: 'Advanced', type: ['front', 'programming']},
    {icon: <ReactSVG/>, name: 'React JS', level: 'Advanced', type: ['front', 'library', 'programming']},
    {icon: <NodeSVG/>, name: 'Node JS', level: 'Basic', type: ['back', 'programming']},
    {icon: <FigmaSVG/>, name: 'Figma', level: 'Intermediate', type: ['design']},
    {icon: <OopSVG/>, name: 'OOP', level: 'Intermediate', type: ['front', 'back', 'programming']},
    {icon: <JquerySVG/>, name: 'jQuery', level: 'Basic', type: ['library', 'programming']},
    {icon: <JsonSVG/>, name: 'JSON', level: 'Intermediate', type: ['programming']},
    {icon: <SassSVG/>, name: 'Sass', level: 'Intermediate', type: ['front']},
    {icon: <GitSVG/>, name: 'Git', level: 'Advanced', type: ['programming']},
    {icon: <CssSVG/>, name: 'CSS3', level: 'Advanced', type: ['front']},
    {icon: <HtmlSVG/>, name: 'HTML5', level: 'Advanced', type: ['front']},
    {icon: <BootstrapSVG/>, name: 'Bootstrap', level: 'Intermediate', type: ['front', 'library']},
    {icon: <FirebaseSVG/>, name: 'Firebase', level: 'Intermediate', type: ['programming', 'database']},
    {icon: <TailwindSVG/>, name: 'Tailwind.css', level: 'Advanced', type: ['front', 'library']},
    {icon: <CsharpSVG/>, name: 'C#', level: 'Intermediate', type: ['programming', 'back']},
    {icon: <DotNetSVG/>, name: '.NET', level: 'Intermediate', type: ['programming', 'back', 'library']},
    {icon: <SqlSVG/>, name: 'SQL', level: 'Intermediate', type: ['database']}
  ];

  const [selected, setSelected] = useState(null);

  const setFilters = (filter) => {
    setSelected(filter);
    
  }

  return (
    <div id='skills' className='flex-wrap w-3/4 sm:mx-auto mx-auto lg:flex-nowrap flex flex-row justify-between gap-10 lg:w-3/4'>
      <div className='w-full text-gray-300'>
        <h2 className='w-2/3 mb-6 md:text-2xl lg:text-3xl font-bold text-text md:mb-6 lg:mb-12 section-title'>Tech Skills</h2>
        <div className='flex flex-wrap w-full gap-x-2 laptop:w-3/4 laptop:flex-nowrap flex-row justify-center mx-auto z-50 text-text md:gap-x-6 gap-y-4'>

          {filters.map( (option, index) => {
            const {text, filter} = option;
            return (
            <span onClick={ () => setFilters(filter) } className={`max-h-[75px] ${filter === selected ? 'selected-filter z-40' : null }`}>
              <Button key={index} text={text} fontSize={'text-[8px] md:text-[12px]'} fontWeight={'font-normal'} rounded={'rounded-full'} width={'w-max'} padding={'px-2 sm:px-4'} height={'h-[20px] md:h-[30px]'} borderBackground={'bg-transparent border-[#4956D2]'}/>
            </span>)
          } )}

        </div>
        <div className='w-[85%] mx-auto flex flex-row justify-center my-12 lg:justify-between items-center'>
          <div className='min-w-3/4 min-h-[500px] max-h-[720px] bg-[#24252B] rounded-lg flex flex-row flex-wrap justify-start items-center gap-8 p-8 z-30 lg:w-1/2'>
            {
              skills.map( (skill, index) => {
                const {icon, name, level, type} = skill;

                return (
                  <div className='cursor-pointer w-fit h-fit flex flex-col items-center mt-5 nav-tooltip'>
                    <div className='relative -top-10 -left-[33px] w-0 h-0 mx-auto opacity-0 duration-200'>
                      <Tooltip text={level}/>
                    </div>
                    {icon}
                    <h4 className='text-xs mt-3'>{name}</h4>
                  </div>
                )
              })
            }
          </div>
          <div className='hidden lg:block'>
            <Illustration/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills