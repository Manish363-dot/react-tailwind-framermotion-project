import React from 'react'
import { useState, useRef, useEffect } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Trusted from './Components/Trusted'
import Services from './Components/Services'
import OurWork from './Components/OurWork'
import Team from './Components/Team'
import ContactUs from './Components/ContactUs'
import {Toaster} from 'react-hot-toast'
import Footer from './Components/Footer'



const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')


  const outlineRef = useRef(null)
  const dotRef = useRef(null)


  const mouse = useRef({x:0 , y:0})
  const position = useRef({x:0 , y:0})

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    document.addEventListener('mousemove', handleMouseMove)

          const animate = () => {
        position.current.x += (mouse.current.x - position.current.x) * 0.1
        position.current.y += (mouse.current.y - position.current.y) * 0.1
        
        if(dotRef.current && outlineRef.current){
          dotRef.current.style.transform = `translate3d(${mouse.current.x-6}px,${mouse.current.y-6}px,0)`
          outlineRef.current.style.transform = `translate3d(${position.current.x-20}px,${position.current.y-20}px,0)`
        }
        requestAnimationFrame(animate)
      }
      
      animate()

      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
      }
  }, [])
      
     

  





  return (
    <div className='dark:bg-black relative'>
      <Toaster/>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero />
      <Trusted/>
     <Services/>
     <OurWork/>
     <Team/>
     <ContactUs/>
     <Footer theme={theme}/>

     {/* ring cursor */}
     <div ref={outlineRef} className='fixed top-0 left-0 h-10 w-10 rounded-full border border-primary z-[9999] pointer-events-none' style={{transition:'transform 0.1s ease-out'}}></div>


    <div className='fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999]' ref={dotRef}></div>

    </div>
  )
}


export default App