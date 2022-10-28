import React from 'react'
import Logo from '../images/logo.png'
import Form from './Form';

export const Landing = () => {
  return (
    <div className='w-screen flex flex-col justify-center items-center md:flex-row'> 
    <article className='container flex items-center justify-center w-100% h-1/2 md:h-screen'>
        <h1 className='text-3xl inline md:text-5xl'>
            <span className='flex items-center justify-center'>
                <img classname="block md:inline "src={Logo} alt="Logo"/>
            </span>
            BuddyMeet
        </h1>
    </article>
    <article className='flex justify-center items-center hero-login container md:h-screen'>
        <Form/>
    </article>
    </div>
  )
};

export default Landing;