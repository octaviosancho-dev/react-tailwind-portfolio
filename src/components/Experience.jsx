import React, { useContext } from 'react';
import ProfilePic from '../assets/img/about-image.png';
import Button from './helpers/Button';
import Mail from './svg/Navigation/Mail';
import { langContext } from '../context/langContext';

import { HashLink as Link } from 'react-router-hash-link';

import { FormattedMessage } from 'react-intl';

const Experience = () => {

  const { locale } = useContext(langContext);

  return (
    <div className='mb-48'>
      <div id='experience' className='flex-wrap w-3/4 mt-96 sm:mx-auto sm:mt-[500px] sm:w-4/6 mx-auto lg:flex-nowrap flex flex-row justify-between gap-10 lg:w-3/4'>
        <div className='w-full lg:w-4/5 text-gray-300'>
          <h2 className='w w-3/4 mb-12 md:text-2xl lg:text-3xl font-bold text-text md:mb-24 section-title'><FormattedMessage id='experience-title' defaultMessage='Experience'/></h2>
          <div className='ml-0 sm:ml-10 md:ml-20'>
            {locale === 'en-US' ? (
              <>
                <p className='font-light mb-5 text-xs md:text-sm lg:text-lg'>
                  Hi! I’m <span className='font-bold'>Octavio Sancho</span>, a 27-year-old Software Developer based in Buenos Aires, Argentina. With over <span className='font-bold'>2 years of experience</span> in frontend and backend development since 2022, I’m passionate about   creating efficient and scalable solutions.
                </p>
                <p className='font-light mb-5 text-xs md:text-sm lg:text-lg'>
                  Currently, I’m a <span className='font-bold'>Backend Developer</span> at <span className='font-bold'>Intuit Salud</span>, where I focus on building and maintaining scalable web services using <span className='font-bold'>.NET, C#, VB</span>, and <span className='font-bold'>Microsoft SQL Server</span>. I’m also sharpening my expertise in microservices architecture, API development, distributed systems, and containerization.
                </p>
                <p className='font-light mb-5 text-xs md:text-sm lg:text-lg'>
                  Before this, I worked at a company called <span className='font-bold'>ReporTV</span>, developing dynamic frontend applications with <span className='font-bold'>React.js</span> and <span className='font-bold'>TypeScript</span>, while collaborating with backend teams to ensure seamless <span className='font-bold'>API integration</span>.
                </p>
                <p className='font-light mb-5 text-xs md:text-sm lg:text-lg'>
                  My technical expertise includes <span className='font-bold'>C#, .NET, JavaScript, TypeScript, React, SQL Server, and CI/CD pipelines</span>. I’m also skilled in <span className='font-bold'>Docker, RabbitMQ, Azure</span>, and <span className='font-bold'>Microservices</span>, and I continuously seek to stay at the forefront of emerging technologies.
                </p>
                <p className='font-light mb-5 text-xs md:text-sm lg:text-lg'>
                  I’m driven by solving complex challenges through development and research, while enjoying the creative process of designing applications. My next goal is to further sharpen my frontend and backend expertise, scaling my skills and evolving professionally.
                </p>
              </>
            ) : 
              <>
                <p className='font-light mb-5 text-xs md:text-sm lg:text-lg'>
                  Hola! Soy <span className='font-bold'>Octavio Sancho</span>, un desarrollador de software de 27 años de Buenos Aires, Argentina. Poseo más de <span className='font-bold'>2 años de experiencia</span> en desarrollo frontend y backend, me apasiona crear soluciones eficientes y escalables.
                </p>
                <p className='font-light mb-5 text-xs md:text-sm lg:text-lg'>
                  Actualmente, trabajo como <span className='font-bold'>Desarrollador Backend</span> en <span className='font-bold'>Intuit Salud</span>, donde me especializo en construir y mantener servicios web escalables utilizando <span className='font-bold'>.NET, C#, VB</span> y <span className='font-bold'>Microsoft SQL Server</span>. También estoy perfeccionando mi experiencia en arquitectura de microservicios, desarrollo de APIs, sistemas distribuidos y contenedorización.
                </p>
                <p className='font-light mb-5 text-xs md:text-sm lg:text-lg'>
                  Antes de esto, trabajé en una empresa llamada <span className='font-bold'>ReporTV</span>, desarrollando aplicaciones frontend con <span className='font-bold'>React.js</span> y <span className='font-bold'>TypeScript</span>, y colaborando con equipos de backend para asegurar una integración perfecta de las <span className='font-bold'>APIs</span>.
                </p>
                <p className='font-light mb-5 text-xs md:text-sm lg:text-lg'>
                  Mi experiencia técnica incluye <span className='font-bold'>C#, .NET, JavaScript, TypeScript, React, SQL Server y CI/CD pipelines</span>. También tengo habilidades en <span className='font-bold'>Docker, RabbitMQ, Azure</span> y <span className='font-bold'>Microservicios</span>, y busco continuamente mantenerme actualizado en las tecnologías emergentes.
                </p>
                <p className='font-light mb-5 text-xs md:text-sm lg:text-lg'>
                  Me impulsa resolver desafíos complejos a través del desarrollo y la investigación, mientras disfruto del proceso de diseñar aplicaciones. Mi objetivo es seguir perfeccionando mi experiencia en frontend y backend, ampliando mis habilidades y evolucionando profesionalmente. 
                </p>
              </>
            }
          </div>
        </div>
        <div className='mx-auto my-auto w-52 md:w-72 laptop:w-auto laptop:mx-auto lg:ml-0'>
          <img src={ProfilePic} alt='about-pic' className='w-80 lg:w-[550px] relative -top-8 -z-10'/>
        </div>
      </div>
      <div className='top-6 lg:top-10 w-full z-10 relative '>
        <Link smooth to='#contact' className='md:hidden laptop:block mx-5 z-20'><Button text={<FormattedMessage id='contact-title' defaultMessage='Get in Touch'/>} icon={<Mail/>} height={'h-12'}/></Link>
      </div>
      <div className='relative top-20 lg:top-20 w-1/3 h-1 mx-auto bg-[#242636] rounded-sm'></div>
    </div>
  )
}

export default Experience;