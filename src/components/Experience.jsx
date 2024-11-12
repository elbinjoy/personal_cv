import React from 'react'
import { motion } from "framer-motion"


const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
   <motion.h2
    // animation
    whileInView={{opacity:1,y:0}}
    initial={{opacity:0,y:-100}}
    transition={{duration:0.5}}
   
   className='my-20 text-center text-4xl'> Experience</motion.h2>  
   <div>

   <div className='mb-8 flex flex-wrap lg:justify-center'>
            {/* year */}
            <motion.div
             // animation
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:-100}}
                transition={{duration:0.5}}
            
            className="w-full lg:w-1/4">
            <p className='mb-2 text-sm text-neutral-400'>Jan 2024-present</p>
            </motion.div>

            {/* details */}
            <motion.div
             // animation
             whileInView={{opacity:1,x:0}}
             initial={{opacity:0,x:100}}
             transition={{duration:0.5}}
            
            
            className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold">Full Stack Developer - <span className='text-purple-100 text-sm'>Freelance</span></h6>
             <p className='mb-4 text-neutral-400 '>Developed responsive web applications utilizing HTML, CSS, and JavaScript to create user-friendly interfaces and enhance user experience.Implemented front-end components with React.js, leveraging state management libraries like Redux to improve application scalability and maintainability</p>
             <p className='mr-2 mt-4 rounded  px-2 py-1 text-sm font-medium text-purple-800'>HTML,CSS,Javascript, React.js,mongoDB,Node.js</p>
            </motion.div> 
        </div>


        <div className='mb-8 flex flex-wrap lg:justify-center'>
            {/* year */}
            <motion.div
             // animation
             whileInView={{opacity:1,x:0}}
             initial={{opacity:0,x:-100}}
             transition={{duration:0.5}}
         
            
            className="w-full lg:w-1/4">
            <p className='mb-2 text-sm text-neutral-400'>May 2024-Nov 2024</p>
            </motion.div>
            {/* details */}
            <motion.div
             // animation
             whileInView={{opacity:1,x:0}}
             initial={{opacity:0,x:100}}
             transition={{duration:0.5}}
            
            className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold">Full Stack Developer Intern - <span className='text-purple-100 text-sm'>Luminar Technolab</span></h6>
             <p className='mb-4 text-neutral-400 '>Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.</p>
             <p className='mr-2 mt-4 rounded  px-2 py-1 text-sm font-medium text-purple-800'>Javascript, React.js, Node.js, mongoDB,Angular.js</p>
            </motion.div> 
        </div>

        



   </div>
     </div>
  )
}

export default Experience