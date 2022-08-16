import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import Button from '../components/helpers/Button';
import Mail from '../components/svg/Navigation/Mail';

import ContactMail from './svg/Contact/ContactMail';
import ContactPhone from './svg/Contact/ContactPhone';
import ContactLinkedIn from './svg/Contact/ContactLinkedIn';
import ContactGithub from './svg/Contact/ContactGithub';
import ContactLocation from './svg/Contact/ContactLocation';
import ContactResume from './svg/Contact/ContactResume';
import FigmaLogo from './svg/FigmaLogo';
import ReactLogo from './svg/ReactLogo';
import ErrorMsg from './helpers/ErrorMsg';
import SuccessMsg from './helpers/SuccessMsg';
import Spinner from './helpers/Spinner';

const Contact = () => {

  const [mail, setMail] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [spinner, setSpinner] = useState(false);

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleOnChange = e => {
    const {name, value} = e.target;

    setMail({
      ...mail,
      [name]: value
    });
  };

  const onSubmit = e => {
    e.preventDefault();

    const mailToSend = Object.values(mail).find( el => el === '');

    setSpinner(true);

    setTimeout(() => {
      setSpinner(false);
    }, 1500);

    if(mailToSend !== undefined) {
      setTimeout(() => {
        setError(true);
      }, 1500);

      setTimeout(() => {
        setError(false);
      }, 3500);
    } else {
      setTimeout(() => {
        setSuccess(true);

        setMail({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
      }, 1500);

      emailjs.sendForm('service_483jx5s', 'template_xncjr8b', e.target, 'B76CSBEd_EEbRsfbx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      setTimeout(() => {
        setSuccess(false);
      }, 3500);
    }
    
  };
  
  return (
    <>
      <div id='contact' className='flex-wrap w-3/4 mt-36 sm:mx-auto mx-auto lg:flex-nowrap flex flex-row justify-between gap-10 lg:w-3/4'>
        <div className='z-50 w-full text-gray-300'>
          <h2 className='mb-12 w-3/4 md:text-2xl lg:text-3xl font-bold text-text md:mb-12 section-title'>Get in touch</h2>
          <div className='bg-[#24252B] w-full sm:w-4/5 rounded-lg flex justify-center items-center flex-col mx-auto mb-11 p-5'>
            <h3 className='text-lg sm:text-2xl font-medium w-1/2 mb-10'>Contact me!</h3>

            <form onSubmit={ onSubmit } className='flex flex-col justify-center outline-none w-4/5 text-xs sm:text-sm gap-10 laptop:w-1/2 '>
              <input
              type="text"
              name='name'
              value={mail.name}
              onChange={handleOnChange}
              placeholder='Full Name'
              className='bg-[#202023] outline-none rounded-md h-9 p-3 border-[#5F6177] border-[3px] input-shadow'
              />
              <input
              type="email"
              name='email'
              value={mail.email}
              onChange={handleOnChange}
              placeholder='E-Mail'
              className='bg-[#202023] outline-none rounded-md h-9 p-3 border-[#5F6177] border-[3px] input-shadow'
              />
              <input
              type="text"
              name='subject'
              value={mail.subject}
              onChange={handleOnChange}
              placeholder='Subject'
              className='bg-[#202023] outline-none rounded-md h-9 p-3 border-[#5F6177] border-[3px] input-shadow'
              />
              <textarea
              type="textarea"
              name='message'
              value={mail.message}
              onChange={handleOnChange}
              style={{resize: 'none'}}
              placeholder='Message...'
              className='text-start bg-[#202023] outline-none rounded-md p-3 border-[#5F6177] border-[3px] input-shadow h-36'
              ></textarea>
              
              { error ? <ErrorMsg/> : null }
              { success ? <SuccessMsg/> : null }

              { spinner ? <Spinner/> : <Button submit={'submit'} text={'Send'} icon={<Mail/>} fontSize={'!text-sm sm:!text-md '} fontWeight={'font-normal'} width={'!w-24 sm:!w-36'} height={'!h-10 sm:!h-12'}/> }
              
            </form>

            <div className='flex flex-row flex-wrap mt-12 mb-5 justify-center items-center gap-8'>
              <a href="mailto:octaviosanchodev@gmail.com" target='_blank' rel="noreferrer"><ContactMail/></a>
              <a href="https://api.whatsapp.com/send?phone=5491166090507" target='_blank' rel="noreferrer"><ContactPhone/></a>
              <a href="https://www.linkedin.com/in/octaviosancho-dev/" target='_blank' rel="noreferrer"><ContactLinkedIn/></a>
              <a href="https://github.com/octaviosancho-dev" target='_blank' rel="noreferrer"><ContactGithub/></a>
              <a href="https://goo.gl/maps/bc6PHC8bkAjURgws9" target='_blank' rel="noreferrer"><ContactLocation/></a>
              <a href="https://drive.google.com/file/d/1vuzu-KvwytBEqQARhJV592ETWhoAljQv/view?usp=sharing" target='_blank' rel="noreferrer"><ContactResume/></a>
            </div>
          </div>
        </div>
      </div>
      <div className='z-50 relative w-full h-6 bg-[#31313E] mx-auto flex flex-row items-center justify-center gap-3 text-xs font-light'>
        <h4>Designed in</h4>
        <a href="https://www.figma.com/file/DeJNT9bq6ckD7OQRnavDYl/Portfolio?node-id=0%3A1" target='_blank' rel="noreferrer"><FigmaLogo/></a>
        <span>/</span>
        <h4>Developed in</h4>
        <a href="https://github.com/octaviosancho-dev/react-tailwind-portfolio" target='_blank' rel="noreferrer"><ReactLogo/></a>
      </div>
    </>
  )
}

export default Contact;