import React from 'react'
import assets from '../assets/assets'

const About = () => {
  return (
    <section id='about' className='bg-[#F8F5EF] py-20 dark:bg-gray-950'>
      
      <div className='mx-auto grid max-w-7xl px-4 gap-16 sm:px-6 lg:px-12 lg:grid-cols-2 lg:gap-20'>

           {/* Image container */}
         <div className='relative'>
            <img src={assets.Hall} 
            alt="Zavora Event Centre hall"
            className='h-[320px] w-full rounded-2xl object-cover sm:h-[380px] lg:h-[500px]' />

             {/* Subtle overlay for a more polished image treatment */}
             <div className='absolute inset-0 rounded-2xl bg-black/10'></div>

                 {/* Decorative gold corner */}
            <div className='absolute -bottom-3 -right-3 h-16 w-16 rounded-br-2xl border-b-2 border-r-2 border-primary'> </div>
         </div>

          {/* Text container */}
          <div className='flex flex-col justify-center'>
            <p className='mb-4 font-sans font-semibold uppercase tracking-[0.25em] text-primary'>
                About Zavora
            </p>

            <h2 className='max-w-xl font-display text-3xl font-medium leading-tight  text-gray-900 dark:text-white sm:text-4xl lg:text-5xl'>
                 A refined setting for moments that matter.
            </h2>

            <div className='mt-6 h-px w-16 bg-primary'></div>

            <p className='mt-6 max-w-xl font-sans text-sm leading-7 text-[#6F6A61] dark:text-white/80 sm:text-base'>
                At Zavora, every detail is thoughtfully considered to create a beautiful
    and welcoming atmosphere for the moments you want to remember.
            </p>

            <p className='mt-4 max-w-xl font-sans text-sm leading-7 text=[#6F6A61] dark:text-white/80 sm:text-base'>
                 From intimate gatherings to grand celebrations, our spaces are designed
        to provide an elegant setting where meaningful moments can unfold.
            </p>

            <a href="#venues"
            className='group mt-6 inline-flex w-fit items-center border-b border-primary/50 pb-1 font-sans text-sm font-semibold text-gray-900 transition-colors duration-300 hover:text-primary dark:text-white'>

              Discover Zavora
              <span className='ml-2 transition-transform duration-300 group-hover:translate-x-1'> →</span>
            </a >

          </div>
      </div>
    </section>
  )
}

export default About