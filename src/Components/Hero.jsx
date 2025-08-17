import React from 'react'
import assets from '../assets/assets'
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div id="hero" className='flex flex-col items-center gap-4 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center overflow-hidden text-gray-700 dark:text-white'>

        <motion.div 
        initial={{opacity:0, y:20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5, delay:0.7}}
        viewport={{once:true}}
        
        className='inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full'>
            <img src={assets.group_profile} alt="" className='w-20'/>
            <p className='text-xs font-medium'>Trusted by 10k+ people</p>
        </motion.div>


        <motion.h1 
            initial={{opacity:0, y:40}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.6, delay:0.8}}
            viewport={{once:true}}
        
        className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium max-w-5xl xl:leading-[95px]'>Turning Imagination into <span className='bg-gradient-to-r from-[#5044E5] to-[#4d8cea]
        bg-clip-text text-transparent'>digital</span>impact.</motion.h1>
        <motion.p 
           initial={{opacity:0, y:30}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.5, delay:0.8}}
            viewport={{once:true}}
        className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3'>Creating meaningful connections and turning big ideas into interactive digital experience.</motion.p>


        <motion.div
          initial={{opacity:0,scale:0.9}}
          whileInView={{opacity:1,scale:1}}
          transition={{duration:0.6, delay:1.3}}
          viewport={{once:true}}
      
        
        className='relative'>
            <video src={assets.video} autoPlay loop muted className='w-full max-w-6xl rounded-3xl'></video>
           <img src={assets.bgImage1} alt="" className=' w-full absolute -top-40 -right-30 sm:-top-110 sm:-right-100 -z-1 dark:hidden' />
        </motion.div>
    </div>
  )
}

export default Hero