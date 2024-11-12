import React from 'react'
import profilepic from '../assets/elbinProfile.png'
import { motion } from "framer-motion"

const container =(delay)=>({
  hidden:{x:-100,opacity:0},
  visible:{x:0,opacity:1,transition:{duration:0.5,delay:delay}}
})



const Me = () => {
  return (

    <div className="border-b border-neutral-900 pb-4 lg:mb-36 ">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col items-center lg:items-start">
                <motion.h1 
                // animation
                variants={container(0)}
                initial="hidden"
                animate="visible"
                
                className='pb-10 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl ml-10'>Elbin Joy</motion.h1>
                <motion.span
                // animation
                 variants={container(0.5)}
                 initial="hidden"
                 animate="visible"

                className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent ml-10'>Full Stack Developer</motion.span>
                <motion.p
                // animation
                 variants={container(1)}
                 initial="hidden"
                 animate="visible"

                className='my-2 max-w-xl py-6 font-light tracking-tighter ml-10'>Results-driven Full Stack Web Developer with a BCA degree and a passion for self-taught learning. Proficient in developing dynamic, responsive websites and web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) along with experience in modern web development frameworks like Tailwind CSS. Committed to continuous learning and development, with a focus on applying both theoretical knowledge and practical skills to solve complex technical challenges</motion.p>
              </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className="flex justify-center">
                    <motion.img 
                    // animation
                    initial={{x:100,opacity:0}}
                    animate={{x:0,opacity:1}}
                    transition={{duration:1,delay:1.2}}
                    
                    src={profilepic} alt="elbin" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Me