import React, { useEffect, useRef } from 'react'
import assets from '../assets/assets'

const Hero = () => {

  // Creates a reference to the video element
  const videoRef = useRef(null)

  // Wait for the video to be ready before trying to play it
  useEffect(() => {
    const video = videoRef.current

    if (video) {

      // Make sure the video is muted
      video.muted = true

      // Function that starts the video
      const playVideo = () => {
        video.play().catch((error) => {
          console.log('Video autoplay was blocked:', error)
        })
      }

      // iOS may expose a usable video before canplay fires.
      video.addEventListener('loadedmetadata', playVideo)
      video.addEventListener('canplay', playVideo)

      // Remove the event listener when the component is removed
      return () => {
        video.removeEventListener('loadedmetadata', playVideo)
        video.removeEventListener('canplay', playVideo)
      }
    }
  }, [])
  return (
    <section className='relative min-h-[100svh] w-full overflow-hidden'>

      {/* Background video */}
      <video
      ref={videoRef}
       src={assets.ExteriorVideo}
        autoPlay
        muted
      defaultMuted
      preload='auto'
        loop
        playsInline
        aria-hidden='true'
        className='absolute inset-0 h-full w-full object-cover '>

      </video>

      {/* Dark overlay */}
      <div className='absolute inset-0 bg-black/35'></div>

      {/* Hero content */}
      <div className='relative z-10 flex min-h-[100svh] items-center justify-center px-4 py-24 sm:px-6 md:px-8 lg:px-12'>

        <div className='w-full max-w-3xl'>

          <p className='mb-3 text-xs font-sans font-medium uppercase tracking-[0.2em] text-white sm:text-sm'>
            Premium Event Experience
          </p>

          <h1 className='font-display text-4xl font-semibold leading-tight text-white sm:text-5xl  md:text-6xl lg:text-7xl'>
            Where Unforgettable Moments Begin
          </h1>

          <p className='mx-auto mt-5 max-w-2xl font-sans text-sm leading-6 text-white/85 sm:text-base sm:leading-7 md:text-lg'>
            A refined event space designed to make your celebrations,
            weddings, and special occasions truly unforgettable.
          </p>

          <div className='mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row'>

            <a href="#venues"
              className='min-w-40 rounded-full bg-primary px-7 py-3 font-sans text-sm font-semibold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg  '>
              Explore Venues
            </a>

            <a href="#contact"
              className='min-w-40 rounded-full border border-white/70 px-7 py-3 font-sans font-semibold text-white text-sm transition-all duration-300 hover:bg-white hover:text-gray-900'>
              Request a Quote
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero