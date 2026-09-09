import React, { useState } from 'react'
import assets from '../assets/assets'

const Navbar = ({ darkMode, setDarkMode }) => {

    // Keeps track of whether the mobile menu is open
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <nav className='fixed top-0 left-0 z-50 w-full  bg-white dark:bg-gray-950 '>

            {/* main container for everything inside the navbar */}
            <div className='mx-auto w-full max-w-7xl flex items-center justify-between px-4 py-4 sm:px-6 font-sans '>
                {/* Zavora logo */}

                <a href="/">
                    <img src={assets.Logo} alt="Zavora Event Centre" className='w-36 h-auto' />
                </a>

                {/* Navigation Links */}

                <div className='hidden lg:flex items-center gap-8'>
                    <a href="#home" className='text-sm font-medium  text-gray-700 transition  hover:text-primary dark:text-gray-300 dark:hover:text-primary'>Home</a>
                    <a href="#about" className='text-sm font-medium  text-gray-700 transition  hover:text-primary dark:text-gray-300 dark:hover:text-primary'>About</a>
                    <a href="#venues" className='text-sm font-medium  text-gray-700 transition  hover:text-primary dark:text-gray-300 dark:hover:text-primary'>Venues</a>
                    <a href="#events" className='text-sm font-medium  text-gray-700 transition  hover:text-primary dark:text-gray-300 dark:hover:text-primary'>Events</a>
                    <a href="#gallery" className='text-sm font-medium  text-gray-700 transition  hover:text-primary dark:text-gray-300 dark:hover:text-primary'>Gallery</a>
                    <a href="#contact" className='text-sm font-medium  text-gray-700 transition  hover:text-primary dark:text-gray-300 dark:hover:text-primary'>Contact</a>
                </div>

                <div className='flex  items-center gap-4 '>

                    {/* Theme toggle button */}
                    <button onClick={() => setDarkMode (!darkMode)} className='flex items-center justify-center w-10 h-10 p-2 rounded-full border border-gray-300 dark:border-gray-700 transition hover:bg-gray-100 dark:hover:bg-gray-800'>

                        <img src={darkMode ? assets.Sun : assets.Moon}
                            alt={darkMode ? "Light mode" : "Dark mode"} className='w-6 h-6 dark:brightness-0 dark:invert' />
                    </button>

                    {/* primary call-to-action */}
                    <a
                        href="#bookings" className='hidden lg:flex text-sm font-medium px-5 py-2.5 rounded-full bg-primary text-white hover:bg-primary/90 transition'>
                        Book Now
                    </a>

                    <button onClick={() => setMenuOpen(!menuOpen)} className='lg:hidden'>
                        <img src={menuOpen ? assets.Close : assets.Menu}
                            alt={menuOpen ? "close menu" : "open menu"} className='w-8 h-8 dark:brightness-0 dark:invert' />
                    </button>
                </div>

            </div>

            {/*  Mobile dropdown menu */}
            <div className={`absolute right-0 top-full  z-50 w-full p-6  bg-white dark:bg-gray-950 shadow-lg dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)] lg:hidden transition-all duration-300 ease-out ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0 pointer-events-none'}`}>

                {/* Mobile navigation links */}
                <div className='flex flex-col  gap-1'>
                    <a href="#home" onClick={() => setMenuOpen (false)} className='rounded-lg px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/10 dark:hover:text-primary'>Home</a>
                    <a href="#about" onClick={() => setMenuOpen (false)} className='rounded-lg px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/10 dark:hover:text-primary'>About</a>
                    <a href="#venues" onClick={() => setMenuOpen (false)} className='rounded-lg px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/10 dark:hover:text-primary'>Venues</a>
                    <a href="#events" onClick={() => setMenuOpen (false)} className='rounded-lg px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/10 dark:hover:text-primary'>Events</a>
                    <a href="#gallery" onClick={() => setMenuOpen (false)} className='rounded-lg px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/10 dark:hover:text-primary'>Gallery</a>
                    <a href="#contact" onClick={() => setMenuOpen (false)} className='rounded-lg px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/10 dark:hover:text-primary'>Contact</a>

                    <div className='my-3 border-t border-gray-200 dark:border-gray-800'>
                    <a href="#bookings" onClick={() => setMenuOpen (false)} className='mx-auto block w-fit rounded-full bg-primary px-8 py-3 text-center text-sm font-semibold text-white  transition-all duration-300 hover:bg-primary/90 hover:shadow-md'>Book Now</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar