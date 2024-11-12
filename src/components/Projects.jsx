import React from 'react'
import media from '../assets/mediaplayer.avif'
import portfolio from '../assets/portfolio.png'
import { motion } from "framer-motion"


const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        
      <motion.h2 
       // animation
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
        
      className='my-20 text-center  text-4xl'>  Projects</motion.h2>
      <div>


        <div className='mb-14 flex flex-wrap lg:justify-center'>
            <motion.div 
             // animation
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:-100}}
                transition={{duration:0.5}}
            
            
            className='w-full lg:w-1/4'>
                <img width={150} height={150} src={media} alt="" />
            </motion.div>
            <motion.div
              // animation
              whileInView={{opacity:1,x:0}}
              initial={{opacity:0,x:100}}
              transition={{duration:0.5}}
            
            className='w-full max-w-xl lg:w-3/4'>
            <h6 className='font-semibold mb-2'>Media Player</h6>
            <p className='mb-4 text-neutral-500'>A dynamic media player website that allows users to manage their video library by adding, removing, and 
             deleting video sourced from YouTube.</p>
             <p className='text-purple-800 mr-2 rounded  px-2 py-1 text-sm font-medium'>React, Node.js, JSON Server, Axios, REST APIs</p>
            </motion.div>
        </div>

        <div className='mb-8 flex flex-wrap lg:justify-center'>
            <motion.div 
             // animation
             whileInView={{opacity:1,x:0}}
             initial={{opacity:0,x:-100}}
             transition={{duration:0.5}}
             
            className='w-full lg:w-1/4'>
                <img width={150} height={150} src={portfolio} alt="" />
            </motion.div>
          

            <motion.div
              // animation
              whileInView={{opacity:1,x:0}}
              initial={{opacity:0,x:100}}
              transition={{duration:0.5}}
            
            className='w-full max-w-xl lg:w-3/4'>
            <h6 className='font-semibold mb-2'>Portfolio Website</h6>
            <p className='mb-4 text-neutral-500'>A personal portfolio website showcasing projects, skills, and contact information.</p>
             <p className='text-purple-800 mr-2 rounded  px-2 py-1 text-sm font-medium'>HTML, CSS, React, Tailwind</p>
            </motion.div>
        </div>


      </div>
        
        </div>
  )
}

export default Projects