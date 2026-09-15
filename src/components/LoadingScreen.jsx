import React, { useEffect, useState } from 'react'
import assets from '../assets/assets'

const LoadingScreen = ({onFinish}) => {

    const [isExisting, setIsExisting] = useState(false)

    useEffect(() => {

        // Start the loading screen exit after the intro animation
        const timer = setTimeout(() => {
               setIsExisting(true)

            // Tell App.jsx that the loading screen is finishing
            onFinish()
        }, 2800)

        return () => clearTimeout(timer)
    }, [onFinish])
    return (
        <div className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#111111] ${
            isExisting ? 'loading-exit' : ''
        }`}>

            {/* Zavora logo */}
            <img src={assets.Logo}
                alt="Zavora Logo"
                className='w-40 sm:w-48 animate-[logoEntrance_1.2s_ease-out_forwards]' />

            {/* Gold accent line */}
            <div className='mt-6 w-0 h-px bg-primary animate-[growLine_1s_ease-out_0.8s_forwards]'></div>

            {/* Short brand message */}
            <p className='mt-4 font-sans text-[10px] font-medium uppercase tracking-[0.35em] text-white/60 tagline-entrance '>
                Moments worth celebrating
            </p>
        </div>
    )
}

export default LoadingScreen