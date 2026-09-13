import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'



const App = () => {

    // keeps track whether the website is in dark mode
    const [darkMode, setDarkMode] = useState(false)

     // Runs whenever darkMode changes
     useEffect (() => {

         // Add "dark" to the <html> element when dark mode is on
         if (darkMode) {
         document.documentElement.classList.add('dark')
         }

          // Remove "dark" from the <html> element when dark mode is off
          else{
          document.documentElement.classList.remove('dark')
          }
     },[darkMode])

    return (

        <div className='min-h-screen bg-white text-gray-900 transition-colors duration-500 dark:bg-gray-950 dark:text-white'>
            {/* websites navigation */}
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Hero/>
            <About/>
        </div>
    )
}

export default App