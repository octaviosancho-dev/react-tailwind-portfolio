import React, { useState, useEffect, Fragment, useContext } from 'react';
import { langContext } from '../context/langContext';

import Button from './helpers/Button';
import Link from './svg/Link';
import Code from './svg/Code';
import Spinner from './helpers/Spinner';
import dotnet from '../assets/img/icons/dotnet.png'

// Firebase / Firestore
import { db } from '../firebase/firebaseConfig';
import { collection, getDocs, query } from 'firebase/firestore';

import { FormattedMessage } from 'react-intl';

const Projects = () => {

  const { locale } = useContext(langContext);

  const [projects, setProjects] = useState([]); 
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    
    setLoading(true);

    const getData = async () => {
      const q = query(collection(db, 'projects'));
      
      const docs = [];

      const querySnapshot = await getDocs(q);
      
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
        
      setProjects(docs);
    }
    
    getData();

    setTimeout(() => {
      setLoading(false);
    }, 1500);

  }, [])

  return (
    <Fragment>
      <div id='projects' className='flex-wrap w-3/4 h-full mt-48 sm:mx-auto mx-auto lg:flex-nowrap flex flex-row justify-between gap-10 lg:w-3/4'>
        <div className='z-50 w-full'>
          <h2 className='w-2/3 mb-12 md:text-2xl lg:text-3xl font-bold text-text md:mb-24 section-title'><FormattedMessage id='projects-title' defaultMessage='Projects'/></h2>
          { loading ? <Spinner/> :
          <div className='flex flex-row w-5/6 gap-10 justify-center flex-wrap mx-auto min-w-[260px]'>
            {projects.map( (project, index) => {

              const { description, descripcion, image, technologies, title, link, github } = project;

              return (
                <div key={index} className='flex flex-row flex-wrap justify-start items-start bg-[#2d2e36] h-[475px] w-[330px] mb-5 rounded-md drop-shadow-md'>
                  <div className='z-50 lg:w-aut rounded-t-md overflow-hidden'>
                    <img src={image} alt='logo'/>
                  </div>
                  <div className='flex justify-start flex-col w-10/12 pl-6'>
                    <h3 className='inline-block text-lg text-light-text sm:text-2xl lg:text-2xl font-medium text-start mb-6'>{title}</h3>
                    <p className='text-xs font-normal h-20 mb-6'>{ locale === 'en-US' ? description : descripcion }</p>
                  </div>
                  <div className='flex flex-row flex-nowrap justify-start gap-4 pl-6'>
                    {technologies.map( (tech, i) => {
                      return (
                        <img key={i} src={require(`../assets/img/icons/${tech}.png`)} alt="s" />
                      )
                    })}
                  </div>
                  <div className='flex flex-row gap-4 flex-nowrap justify-center items-center ml-6 sm:ml-24 relative top-12'>
                    <div><a href={link} target='_blank' rel="noreferrer"><Button disable={link === '' && true} text={<FormattedMessage id='project-site-btn' defaultMessage='Live demo'/>} icon={<Link stroke={link === '' ? '#9ca3af' : 'white'}/>} width={'w-[130px]'} height={'h-[36px] sm:h-[42px]'} fontWeight={'font-normal'} fontSize={'!text-[16px]'}/></a></div>
                    <div><a href={github} target='_blank' rel="noreferrer"><Button icon={<Code/>} width={'w-fit'} height={'h-[36px] sm:h-[42px]'} fontWeight={'font-light'} fontSize={'!text-[16px]'} bgColor={'!bg-[#2B2B31]'} borderBackground={'input-shadow !border-[#5F6177]'}/></a></div>
                  </div>
                </div>
              )
            })}
          </div>
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Projects;