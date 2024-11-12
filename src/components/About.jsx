import React from 'react'
import aboutme from '../assets/aboutme.jpg'
import { motion } from "framer-motion"


const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2
         // animation
         whileInView={{opacity:1,x:0}}
         initial={{opacity:0,x:-100}}
         transition={{duration:0.5}}
        
        className="my-20 text-center text-4xl">About <span className='text-neutral-500'> Me</span> </motion.h2>
        <div className="flex flex-wrap">
            <motion.div 
            // animation
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:0.5}}

            className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
                <img className='h-full rounded-2xl ' src={aboutme} alt="aboutme" />
            </div>
            </motion.div>

            <motion.div
            // animation
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:0.5}}


            className="w-full lg:w-1/2 ">
            <div className="flex justify-center lg:justify-start">
                <p className='ms-5 my-2 max-w-xl py-6 tracking-wide'> I'm Elbin Joy, a BCA graduate and a passionate full-stack developer who loves building impactful web applications. I work with technologies like JavaScript, React.js, and Node.js, creating seamless front-end experiences and robust back-end solutions. I also have experience managing databases with MongoDB, which helps ensure data is handled efficiently. I enjoy collaborating closely with teams and product managers to bring projects to life and constantly push myself to stay current with the latest in tech. For me, every project is an opportunity to learn and grow, and I’m always looking for new ways to enhance my skills and create something valuable.</p>
            </div>
          </motion.div>
        </div>
    </div>
  )
}

export default About