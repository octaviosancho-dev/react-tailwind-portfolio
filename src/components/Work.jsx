import React, { useState, useEffect, Fragment } from 'react';
import Button from './helpers/Button';
import Link from '../components/svg/Link';
import Code from './svg/Code';
import Spinner from './helpers/Spinner';
import UsedTech from './svg/Skills/UsedTech';

// Firebase / Firestore
import { db } from '../firebase/firebaseConfig';
import { collection, getDocs, query } from 'firebase/firestore';

const Work = () => {

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
      <div id='work' className='flex-wrap w-3/4 h-full mt-48 sm:mx-auto mx-auto lg:flex-nowrap flex flex-row justify-between gap-10 lg:w-3/4'>
        <div className='w-full'>
          <h2 className='w-2/3 mb-12 md:text-2xl lg:text-3xl font-bold text-text md:mb-24 section-title'>My Work</h2>
          { loading ? <Spinner/> :
          <div className='mx-auto w-5/6'>
            {projects.map( (project, index) => {

              const { description, image, technologies, title, link, github } = project;

              return (
                <div key={index} className='flex flex-row flex-wrap justify-around items-center gap-10 mb-24 sm:mb-36 mx-auto border-b-2 border-[#343434] pb-28'>
                  <div className='z-50 w-[215px] lg:w-auto border-black border-[5px] rounded-lg overflow-hidden btn-shadow duration-300 cursor-pointer'>
                    <img src={image} alt='logo'/>
                  </div>
                  <div className='z-50 flex justify-start flex-col gap-6'>
                    <h3 className='text-lg sm:text-2xl lg:text-4xl font-medium sm:w-[600px] text-start whitespace-nowrap border-b-4 pb-3 border-[#343750]'>{title}</h3>
                    <p className='text-xs font-normal lg:text-sm sm:w-[600px]'>{description}</p>
                    <p className='text-sm font-normal lg:text-lg sm:w-[600px] text-title'>Used technologies: <span className='text-xs font-light text-text lg:text-[16px]'>{technologies}</span></p>
                    <div className='flex flex-row gap-4 flex-wrap justify-center items-center mt-4 laptop:justify-start laptop:ml-10'>
                      <div className='mt-4'><a href={link} target='_blank' rel="noreferrer"><Button text={'Visit Site'} icon={<Link/>} width={'w-fit sm:w-[155px]'} height={'h-[36px] sm:h-[42px]'} fontWeight={'font-normal'} fontSize={'!text-[16px]'}/></a></div>
                      <div className='mt-4'><a href={github} target='_blank' rel="noreferrer"><Button text={'Code'} icon={<Code/>} width={'w-fit sm:w-[155px]'} height={'h-[36px] sm:h-[42px]'} fontWeight={'font-light'} fontSize={'!text-[16px]'} bgColor={'!bg-[#2B2B31]'} borderBackground={'input-shadow !border-[#5F6177]'}/></a></div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          }
        </div>
      </div>
      
      <div className='hidden sm:block mx-auto self-center w-max sm:mt-3'>
        <UsedTech/>
      </div>
    </Fragment>
  )
}

export default Work;