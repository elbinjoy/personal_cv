import React from 'react'
import { motion } from "framer-motion"


const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
       <motion.h2
            // animation
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:0.5}}
       
       className='text-4xl text-center my-20'> Get in touch</motion.h2>
       <div className="text-center tracking-tighter">
        <motion.p
             // animation
             whileInView={{opacity:1,y:0}}
             initial={{opacity:0,y:-100}}
             transition={{duration:0.5}}
        
        className='my-4 mx-2'><i class="fa-solid fa-phone"></i>  +91 7012595314</motion.p>
        <motion.a
         // animation
         whileInView={{opacity:1,y:0}}
         initial={{opacity:0,y:-100}}
         transition={{duration:0.5}}

        href='mailto:elbinjoyp@gmail.com?subject=Contact from Portfolio&body=Hi Elbin,' id='linkss'  className='my-4 border-b'><i class="fa-solid fa-envelope"></i> elbinjoyp@gmail.com</motion.a>


        <p className='mt-40'>Built with React</p>
       </div>
        
        </div>
  )
}

export default Contact