import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import LoadingScreen from './components/LoadingScreen'



const App = () => {

    // keeps track whether the website is in dark mode
    const [darkMode, setDarkMode] = useState(false)

    // Keeps track of whether the opening/loading screen is still active
             const [loading, setLoading] =  useState(true)


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
            {/* Zavora opening/loading experience */}
            <LoadingScreen onFinish={() => setLoading(false)}/>

            {/* websites navigation */}
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

            {/* Hero starts its entrance animation after the loading screen finishes */}
            <Hero loading={loading}/>
            <About/>
            <Services/>
            <Gallery/>
            <Contact/>
        </div>
    )
}

export default App