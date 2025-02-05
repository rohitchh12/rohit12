import React from 'react';
import img from '../assets/Screenshot.png';
import linkedin from '../assets/Linkedin.png';
import Git from '../assets/GitHub.png';

const About = () => {
  return (
    <div className='flex flex-col h-auto w-full max-w-4xl bg-amber-50 mt-20 mx-auto p-4 rounded-lg shadow-lg'>
      <div className='flex flex-col md:flex-row pt-10 justify-center gap-10'>
        <div className='flex justify-center'>
          <img src={img} alt="Profile" className='w-32 h-32 md:w-48 md:h-48 rounded-full' />
        </div>
        <div className='flex flex-col justify-center text-center md:text-left'>
          <div className='text-xl font-bold'>I'm <b>Rohit Sorout</b></div>
          <div className='text-lg'>Web Developer</div>
          <hr className='mt-2 border-gray-300' />
          <div className='mt-2'>Age: 21</div>
          <div>Qualification: BE-CS</div>
          <div>Current Address: Sector 63-Noida, Uttar Pradesh</div>
          <div>Phone: 8800259199</div>
          <div>Email: devsorout2004@gmail.com</div>
        </div>
      </div>
      <div className='mt-4 text-gray-700 text-center md:text-left'>
        As a recent Bachelor of Engineering graduate in Computer Science and Engineering (2020-2024), I am seeking a challenging position as a Web Developer. I aim to leverage my technical skills and knowledge to contribute effectively to organizational goals while enhancing my professional growth in a dynamic and innovative work environment.
      </div>
      <div className='bg-red-400 h-20 flex justify-evenly items-center mt-4 rounded-b-lg'>
        <a href='https://www.linkedin.com/in/rohit-sorout-b78788231/' className='w-[100px] bg-white pr-2 pl-2 rounded-2xl pt-1 pb-1 flex justify-center items-center'>
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a href='https://github.com/rohitchh12' className='h-10 w-[70px] bg-white pr-2 pl-2 rounded-2xl pt-1 pb-1 flex justify-center items-center'>
          <img src={Git} alt="GitHub" />
        </a>
      </div>
    </div>
  );
}

export default About;
