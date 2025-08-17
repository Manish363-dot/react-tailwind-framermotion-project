import React from 'react'
import { useState } from 'react'
import assets from '../assets/assets'
import ThemeToggle from './ThemeToggle'
import Hero from './Hero'
import { motion } from "framer-motion"


const Navbar = ({theme, setTheme}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)






  return (
    <motion.div 
    initial={{opacity:0 , y:-50}} 
    animate={{opacity:1 , y:0}} 
    transition={{duration:0.6, ease:'easeOut'}}
    
    className='flex justify-between items-center px-4 sm:px-12 lg:px-24 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70'>
        <img src={theme === "dark" ? assets.logo_dark : assets.logo} alt="logo" className='w-32 sm:w-40' />

        <div className={`text-gray-700 dark:text-white text-xl ${!isMenuOpen ?'max-sm:w-0 overflow-hidden':'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>

            <img src={assets.close_icon} alt="" className='w-5 absolute right-4 top-4 sm:hidden' onClick={() => setIsMenuOpen(false)}/>
            <a  onClick = {()=> setIsMenuOpen(false)} href="#" className='sm:hover:border-b-2 '>Home</a>
            <a   onClick = {()=> setIsMenuOpen(false)} href="#services" className='sm:hover:border-b-2'>Services</a>
            <a  onClick = {()=> setIsMenuOpen(false)} href="#our-work" className='sm:hover:border-b-2'>Our Work</a>
            <a  onClick = {()=> setIsMenuOpen(false)} href="#contact-us" className='sm:hover:border-b-2'>Contact Us</a>
        </div>
       

       <div className='flex items-center gap-2 sm:gap-4'>

        <ThemeToggle theme={theme} setTheme={setTheme}/>

        <img src={theme === "dark" ? assets.menu_icon_dark :assets.menu_icon} alt="" onClick={()=> setIsMenuOpen(true)} className='w-8 sm:hidden'/>


        <a href="#contact-us" className="text-xl max-sm:hidden flex items-center gap-3 bg-primary text-white px-8 py-2 rounded-full cursor-pointer hover:scale-103 transition-all">Connect <img src={assets.arrow_icon} width={14} alt="" /></a>
       </div>

 
    </motion.div>

  )
}

export default Navbar