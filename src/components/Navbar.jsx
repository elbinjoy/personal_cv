import React from 'react'
import logo from '../assets/logo1.png'
import resume from '../assets/Elbinjoy_developer.pdf'



const Navbar = () => {
  return (
    <>
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img width={100} height={100} className='mx-2 w-10' src={logo} alt="logo" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'> 
          {/* github */}
        <a id='linkss' href='https://github.com/elbinjoy/'><i class="fa-brands fa-github"></i></a>
          {/* linkdin */}
       <a id='linkss' href='https://linkedin.com/in/elbinjoy'> <i class="fa-brands fa-linkedin"></i></a>
          {/* mail */}
        <a id='linkss' href='mailto:elbinjoyp@gmail.com?subject=Contact from Portfolio&body=Hi Elbin,'><i class="fa-solid fa-envelope"></i></a>
        <a id='linkss' href={resume} download="Elbinjoy_developer.pdf"><i class="fa-solid fa-file"></i></a>
        </div>
    </nav>
    </>
  )
}

export default Navbar