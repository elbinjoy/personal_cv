import React from 'react'
import { DiMongodb } from "react-icons/di";
import { animate, easeIn, easeInOut, motion, } from "framer-motion"


const iconVarients=(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10]},
        transition:{
            duration:duration,
            easeInOut:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
})

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800  pb-24 '>
     <motion.h2
      //  // animation
      //  whileInView={{opacity:1,x:0}}
      //  initial={{opacity:0,x:-100}}
      //  transition={{duration:0.5}}
     className='my-20 text-center  text-4xl '>Technologies</motion.h2>
     <motion.div 
    //  animation
       whileInView={{opacity:1,x:0}}
       initial={{opacity:0,x:-100}}
       transition={{duration:0.5}}
     className="flex flex-wrap items-center justify-center gap-4">
        {/* icons */}
     {/* react icon */}
    <motion.div
    // animation
    variants={iconVarients(2.5)}
    initial="initial"
    animate="animate"

    className="rounded-2xl border-4 border-neutral-800 p-4">
      <a className='text-7xl text-cyan-500'> <i class="fa-brands fa-react"></i> </a>
      </motion.div>
         {/* mongodb */}
         <motion.div 
        //  animation
        variants={iconVarients(3)}
        initial="initial"
        animate="animate"

         className="rounded-2xl border-4 border-neutral-800 p-4">
      <DiMongodb className='text-7xl text-green-500' />
       </motion.div>
  
         {/* angular */}
    <motion.div
      //  animation
      variants={iconVarients(2.5)}
      initial="initial"
      animate="animate"
    
    className="rounded-2xl border-4 border-neutral-800 p-4">
      <a className='text-7xl text-red-500'> <i class="fa-brands fa-angular"></i> </a>
      </motion.div>

      {/* node js */}
    <motion.div
     //  animation
     variants={iconVarients(3)}
     initial="initial"
     animate="animate"
    
    className="rounded-2xl border-4 border-neutral-800 p-4">
      <a className='text-7xl text-green-500'> <i class="fa-brands fa-node-js"></i> </a>
      </motion.div>
   
       
     </motion.div>   
</div>
  )
}

export default Technologies