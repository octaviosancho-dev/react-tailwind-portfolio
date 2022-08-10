import React, { useState, useEffect } from 'react';

// Firebase / Firestore
import { db } from '../firebase/firebaseConfig';
import { collection, getDocs, query } from 'firebase/firestore';

const Work = () => {

const [projects, setProjects] = useState([]); 
const [spinner, setSpinner] = useState(true);

useEffect( () => {

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

}, [])



  return (
    <div id='work' className='flex-wrap w-3/4 mt-48 sm:mx-auto mx-auto lg:flex-nowrap flex flex-row justify-between gap-10 lg:w-3/4'>
      <div className='w-full lg:w-4/5 text-gray-300'>
        <h2 className='w-2/3 mb-12 md:text-2xl lg:text-3xl font-bold text-text md:mb-24 section-title'>My Work</h2>
        
        {projects.map( (project, index) => {
          const { description, image, technologies, title } = project;
          return (
            <div key={index}>

            </div>
          )
        })}

      </div>
    </div>
  )
}

export default Work