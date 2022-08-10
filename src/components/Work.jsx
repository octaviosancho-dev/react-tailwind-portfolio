import React, { useState, useEffect, Fragment } from 'react';
import Button from './helpers/Button';
import Link from '../components/svg/Link';
import Spinner from './helpers/Spinner';

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
    { loading ? <Spinner/> : 
      <>
        <div id='work' className='flex-wrap w-3/4 h-full mt-48 sm:mx-auto mx-auto lg:flex-nowrap flex flex-row justify-between gap-10 lg:w-3/4'>
          <div className='w-full'>
            <h2 className='w-2/3 mb-12 md:text-2xl lg:text-3xl font-bold text-text md:mb-24 section-title'>My Work</h2>
            
            <div className='mx-auto w-5/6'>
              {projects.map( (project, index) => {

                const { description, image, technologies, title, link } = project;

                return (
                  <div key={index} className='flex flex-row flex-wrap justify-around items-center gap-10 mb-36 mx-auto border-b-2 border-[#343434] pb-28'>
                    <div className='z-50 border-black border-[5px] rounded-lg overflow-hidden btn-shadow duration-300 cursor-pointer'>
                      <img src={image} alt='logo'/>
                    </div>
                    <div className='z-50 flex justify-start flex-col gap-6'>
                      <h3 className='text-4xl font-medium w-[600px] text-start whitespace-nowrap border-b-4 pb-3 border-[#343750]'>{title}</h3>
                      <p className='font-normal text-sm w-[600px]'>{description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt libero ullam ex et similique voluptatum dolorum odit doloribus dolorem soluta mollitia reiciendis a sed nesciunt, blanditiis voluptas, commodi tempora vel.</p>
                      <p className='font-normal text-md w-[600px] text-title'>Used technologies: <span className='font-light text-text text-[16px]'>{technologies}</span></p>
                      <div className='w-[195px] mt-4'><a href={link} target='_blank' rel="noreferrer"><Button text={'Visit Site'} icon={<Link/>} width={'w-[155px]'} height={'h-[42px]'} fontWeight={'font-normal'}/></a></div>
                    </div>
                  </div>
                )
              })}
            </div>
            
          </div>
        </div>
        <div className='relative top-20 lg:top-0 w-1/3 h-1 mx-auto bg-[#242636] rounded-sm'></div>
      </>
    }
    </Fragment>
  )
}

export default Work;