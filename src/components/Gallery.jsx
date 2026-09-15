import React from 'react'
import assets from '../assets/assets'

const Gallery = () => {
  return (
    <section id='gallery'
     className='scroll-mt-24 bg-[#F8F5EF] py-20 dark:bg-gray-950'>

        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 '>

            <p className='mb-4 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-primary'>
                Gallery
            </p>

            <h2 className='max-w-2xl font-display font-medium text-3xl leading-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl'>
                A glimpse into the Zavora experience.
            </h2>

            <div className='mt-6 w-16 h-px bg-primary'></div>

            <p className='mt-6 max-w-3xl font-sans text-sm leading-7 text-[#6F6A61] dark:text-white/80 sm:text-base'>
                Take a closer look at the spaces and details that make Zavora a beautiful setting for special occasions.
            </p>

            <div className='relative mt-12 h-[240px] sm:h-[320px] lg:h-[520px] rounded-2xl overflow-hidden mb-16'>
               <video
               autoPlay
               muted
               loop
               aria-hidden='true'
               playsInline
               preload='metadata'
               src={assets.InteriorVideo}
               className='rounded-2xl h-full w-full object-cover transition-transform duration-700 hover:scale-105'>
               </video>

               <div className='pointer-events-none absolute inset-0 bg-black/20'></div>

               <div className='absolute bottom-4 right-4 rounded-full bg-black/30 px-3 py-2 backdrop-blur-sm sm:bottom-5 sm:right-5 sm:px-4 '>
               <p className='font-sans text-xs font-medium uppercase tracking-[0.25em] text-white/80'>
                Inside Zavora
               </p>
               </div>

            </div>
               <div className='mt-8 h-px w-full bg-black/10 dark:bg-white/20'></div>


        </div>

    </section>
  )
}

export default Gallery